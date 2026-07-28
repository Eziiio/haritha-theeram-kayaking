import React, { useState, useEffect } from 'react';
import { Search, Trash2, Users, DollarSign, Lock, LogOut, ClipboardList } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    totalGuests: 0,
    packageStats: {
      'Morning Package': 0,
      'Afternoon Package': 0,
      'Evening Package': 0,
      'Kayaking Only': 0,
    }
  });

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [error, setError] = useState('');
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const savedPassword = localStorage.getItem('admin_pass');
    if (savedPassword) {
      verifyAndLogin(savedPassword);
    }
  }, []);

  const verifyAndLogin = async (passToVerify) => {
    setLoading(true);
    setAuthError('');
    try {
      const response = await fetch('http://localhost:5001/api/bookings/verify-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passToVerify }),
      });
      const data = await response.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_pass', passToVerify);
        setPassword(passToVerify);
        fetchData(passToVerify);
      } else {
        setAuthError(data.message || 'Invalid password.');
        localStorage.removeItem('admin_pass');
      }
    } catch (err) {
      setAuthError('Connection error. Is the backend running?');
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!password.trim()) {
      setAuthError('Please enter a password.');
      return;
    }
    verifyAndLogin(password);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_pass');
    setIsAuthenticated(false);
    setPassword('');
    setBookings([]);
  };

  const fetchData = async (pass = password) => {
    setLoading(true);
    setError('');
    try {
      const url = `http://localhost:5001/api/bookings?search=${encodeURIComponent(search)}`;
      const response = await fetch(url, { headers: { 'x-admin-password': pass } });
      const data = await response.json();
      if (data.success) {
        setBookings(data.data);
      } else {
        setError(data.message || 'Failed to fetch bookings.');
      }

      const statsRes = await fetch('http://localhost:5001/api/bookings/stats', {
        headers: { 'x-admin-password': pass },
      });
      const statsData = await statsRes.json();
      if (statsData.success) {
        setStats(statsData.stats);
      }
    } catch (err) {
      setError('Error fetching dashboard data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const delayDebounce = setTimeout(() => { fetchData(); }, 300);
      return () => clearTimeout(delayDebounce);
    }
  }, [search, isAuthenticated]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { 'x-admin-password': password },
      });
      const data = await response.json();
      if (data.success) {
        setDeleteId(null);
        fetchData();
      } else {
        alert(data.message || 'Failed to delete booking.');
      }
    } catch (err) {
      alert('Error connecting to server.');
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-sand-100 min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-sand-50 border border-sand-300 p-8 rounded-3xl shadow-xl shadow-ink-900/5">
          <div className="text-center space-y-3">
            <div className="mx-auto bg-ink-900 text-gold-400 p-4 rounded-full w-fit">
              <Lock className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-ink-900">Admin Dashboard</h2>
            <p className="text-ink-400 text-xs font-semibold uppercase tracking-widest">
              Enter Credentials to Manage Bookings
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            {authError && (
              <div className="bg-rose-50 border border-rose-100 text-rose-800 text-xs font-semibold rounded-xl p-3">
                {authError}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="admin-pass" className="block text-sm font-bold text-ink-700">Admin Password</label>
              <input
                id="admin-pass"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-ink-800 focus:border-ink-800 text-sm bg-sand-100 hover:bg-sand-50 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold text-sand-50 bg-ink-900 hover:bg-lagoon-700 disabled:opacity-50 transition-colors duration-300"
            >
              {loading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-sand-300 pb-6">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-ink-900 tracking-tight">Admin Console</h1>
            <p className="text-ink-400 text-sm font-medium">Manage and review tour requests.</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-fit inline-flex items-center px-4 py-2 border border-sand-300 rounded-full text-xs font-bold text-ink-600 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-100 transition-colors"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-sand-50 border border-sand-300 rounded-3xl p-6 shadow-xl shadow-ink-900/5 flex items-center space-x-4">
            <div className="p-4 bg-lagoon-50 text-lagoon-600 rounded-2xl">
              <ClipboardList className="h-6 w-6" />
            </div>
            <div>
              <span className="text-ink-400 text-xs font-bold uppercase tracking-wider block">Total Bookings</span>
              <span className="font-serif text-2xl font-semibold text-ink-900">{stats.totalBookings}</span>
            </div>
          </div>

          <div className="bg-sand-50 border border-sand-300 rounded-3xl p-6 shadow-xl shadow-ink-900/5 flex items-center space-x-4">
            <div className="p-4 bg-gold-50 text-gold-600 rounded-2xl">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <span className="text-ink-400 text-xs font-bold uppercase tracking-wider block">Total Guests</span>
              <span className="font-serif text-2xl font-semibold text-ink-900">{stats.totalGuests}</span>
            </div>
          </div>

          <div className="bg-sand-50 border border-sand-300 rounded-3xl p-6 shadow-xl shadow-ink-900/5 flex items-center space-x-4">
            <div className="p-4 bg-clay-50 text-clay-500 rounded-2xl">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <span className="text-ink-400 text-xs font-bold uppercase tracking-wider block">Projected Revenue</span>
              <span className="font-serif text-2xl font-semibold text-ink-900">₹{stats.totalRevenue}</span>
            </div>
          </div>
        </div>

        <div className="bg-sand-50 border border-sand-300 rounded-3xl shadow-xl shadow-ink-900/5 overflow-hidden">
          <div className="p-6 border-b border-sand-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-sand-100/60">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-ink-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, phone, or package..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-lagoon-500 focus:border-lagoon-500 text-sm bg-sand-50 hover:bg-sand-100 transition-colors"
              />
            </div>
            <div className="text-xs text-ink-400 font-semibold">
              Showing {bookings.length} of {stats.totalBookings} records
            </div>
          </div>

          {error && (
            <div className="p-6 text-center text-rose-600 font-semibold text-sm">
              {error}
            </div>
          )}

          {loading && bookings.length === 0 ? (
            <div className="p-12 text-center text-ink-400 font-medium text-sm">
              Loading booking records...
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-12 text-center text-ink-400 font-medium text-sm">
              No bookings found matching search criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-sand-200 text-left text-sm">
                <thead className="bg-sand-100/70 text-ink-400 text-xs font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Package</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Guests</th>
                    <th className="px-6 py-4">Total Price</th>
                    <th className="px-6 py-4">Special Notes</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200 text-ink-700">
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-sand-100/60 transition-colors">
                      <td className="px-6 py-4 font-bold text-ink-900">{booking.name}</td>
                      <td className="px-6 py-4 font-mono">{booking.phone}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${booking.packageType === 'Morning Package' ? 'bg-lagoon-50 text-lagoon-700' :
                            booking.packageType === 'Afternoon Package' ? 'bg-gold-50 text-gold-600' :
                              booking.packageType === 'Evening Package' ? 'bg-clay-50 text-clay-500' :
                                'bg-sand-200 text-ink-700'
                          }`}>
                          {booking.packageType}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {new Date(booking.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-6 py-4 text-center font-semibold">{booking.guests}</td>
                      <td className="px-6 py-4 font-bold text-ink-900">₹{booking.totalPrice}</td>
                      <td className="px-6 py-4 max-w-xs truncate text-xs text-ink-500" title={booking.notes}>
                        {booking.notes || '-'}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {deleteId === booking._id ? (
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => handleDelete(booking._id)}
                              className="px-2 py-1 bg-rose-600 text-white rounded text-[10px] font-bold hover:bg-rose-700"
                            >
                              Yes, Delete
                            </button>
                            <button
                              onClick={() => setDeleteId(null)}
                              className="px-2 py-1 bg-sand-200 text-ink-700 rounded text-[10px] font-bold hover:bg-sand-300"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteId(booking._id)}
                            className="p-2 text-ink-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors mx-auto block"
                            title="Delete booking"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
