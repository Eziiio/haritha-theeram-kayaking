import React, { useState } from 'react';
import {
    Calendar,
    User,
    Phone,
    CheckCircle,
    Info,
    Clock,
    Sparkles
} from 'lucide-react';


export default function Booking() {

    const [formData, setFormData] = useState({

        name: '',

        phone: '',

        packageType: 'Morning Experience',

        duration: '1.5 Hours',

        timeSlot: '7:00 AM',

        date: '',

        guests: 1,

        notes: '',

    });


    const [loading, setLoading] = useState(false);

    const [success, setSuccess] = useState(false);

    const [error, setError] = useState('');

    const [receipt, setReceipt] = useState(null);

    const availableSlots = {

        'Morning Experience': [
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
        ],


        'Village Explorer Experience': [
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
        ],


        'Evening Experience': [
            '3:00 PM',
            '4:00 PM',
            '5:00 PM',
            '6:00 PM',
        ],


        'Kayaking Experience': [
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
            '10:00 AM',
            '11:00 AM',
            '12:00 PM',
            '1:00 PM',
            '2:00 PM',
            '3:00 PM',
            '4:00 PM',
            '5:00 PM',
        ]

    };

    const handleChange = (e) => {

        const { name, value } = e.target;


        setFormData(prev => {


            const updated = {

                ...prev,

                [name]:
                    name === 'guests'
                        ? Math.max(1, parseInt(value) || 1)
                        : value

            };


            // reset time when package changes

            if (name === "packageType") {

                updated.timeSlot =
                    availableSlots[value][0];

            }


            return updated;


        });

    };



    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError('');


        try {

            const response = await fetch(
                'http://localhost:5001/api/bookings',
                {

                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(formData)

                }
            );


            const data = await response.json();


            if (data.success) {

                setSuccess(true);

                setReceipt(data.data);

            } else {

                setError(data.message);

            }


        } catch (error) {

            setError(
                'Unable to connect server'
            );

        }


        setLoading(false);

    };



    return (

        <div className="bg-slate-50 min-h-screen py-16">

            <div className="max-w-4xl mx-auto px-4">


                {/* HEADER */}

                <div className="text-center space-y-4 mb-12">


                    <h1 className="text-xs font-bold text-teal-600 uppercase tracking-widest">

                        Book Your Experience

                    </h1>


                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">

                        Reserve Your Arival Thoodu Journey

                    </h2>


                    <p className="text-slate-500 font-medium">

                        Select your preferred kayaking experience, date and time.

                    </p>


                </div>



                {
                    success && receipt ?

                        (

                            <div className="bg-white rounded-3xl p-10 shadow-xl text-center space-y-6">


                                <div className="mx-auto bg-emerald-50 text-emerald-600 p-4 rounded-full w-fit">

                                    <CheckCircle size={45} />

                                </div>


                                <h2 className="text-2xl font-bold">

                                    Booking Request Received

                                </h2>


                                <p className="text-slate-500">

                                    Thank you for choosing Haritha Theeram Kayaking.
                                    Your Arival Thoodu experience has been reserved.

                                </p>


                                <div className="bg-slate-50 rounded-2xl p-5 text-left space-y-3">


                                    <p>

                                        <b>Name:</b> {receipt.name}

                                    </p>


                                    <p>

                                        <b>Package:</b> {receipt.packageType}

                                    </p>


                                    <p>

                                        <b>Duration:</b> {receipt.duration}

                                    </p>


                                    <p>

                                        <b>Time:</b> {receipt.timeSlot}

                                    </p>


                                    <p>

                                        <b>Guests:</b> {receipt.guests}

                                    </p>


                                </div>


                                <button

                                    onClick={() => setSuccess(false)}

                                    className="px-5 py-3 bg-teal-600 text-white rounded-xl"

                                >

                                    Book Another

                                </button>


                            </div>

                        )

                        :

                        (<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                            {/* BOOKING FORM */}

                            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">

                                <form onSubmit={handleSubmit} className="space-y-6">


                                    {error && (

                                        <div className="bg-red-50 text-red-700 p-4 rounded-xl text-sm">

                                            {error}

                                        </div>

                                    )}



                                    {/* NAME */}

                                    <div>

                                        <label className="font-bold text-sm">
                                            Full Name
                                        </label>


                                        <div className="relative mt-2">

                                            <User className="absolute left-4 top-3.5 text-slate-400" />


                                            <input

                                                name="name"

                                                required

                                                value={formData.name}

                                                onChange={handleChange}

                                                placeholder="Enter your name"

                                                className="w-full pl-12 py-3 border rounded-xl"

                                            />

                                        </div>

                                    </div>



                                    {/* PHONE */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Phone Number

                                        </label>


                                        <div className="relative mt-2">

                                            <Phone className="absolute left-4 top-3.5 text-slate-400" />


                                            <input

                                                name="phone"

                                                required

                                                value={formData.phone}

                                                onChange={handleChange}

                                                placeholder="10 digit mobile number"

                                                className="w-full pl-12 py-3 border rounded-xl"

                                            />

                                        </div>

                                    </div>



                                    {/* PACKAGE */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Select Experience

                                        </label>


                                        <select

                                            name="packageType"

                                            value={formData.packageType}

                                            onChange={handleChange}

                                            className="w-full mt-2 p-3 border rounded-xl"

                                        >


                                            <option value="Morning Experience">

                                                Morning Experience (Breakfast + Kayaking)

                                            </option>


                                            <option value="Village Explorer Experience">

                                                Village Explorer Experience

                                            </option>


                                            <option value="Evening Experience">

                                                Evening Experience (Snacks + Kayaking)

                                            </option>


                                            <option value="Kayaking Experience">

                                                Kayaking Only Experience

                                            </option>


                                        </select>

                                    </div>




                                    {/* DURATION */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Kayaking Duration

                                        </label>


                                        <select

                                            name="duration"

                                            value={formData.duration}

                                            onChange={handleChange}

                                            className="w-full mt-2 p-3 border rounded-xl"

                                        >


                                            <option value="1.5 Hours">

                                                1.5 Hours Experience

                                            </option>


                                            <option value="3 Hours">

                                                3 Hours Extended Experience

                                            </option>


                                        </select>


                                    </div>




                                    {/* DATE */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Select Date

                                        </label>


                                        <div className="relative mt-2">

                                            <Calendar className="absolute left-4 top-3.5 text-slate-400" />


                                            <input

                                                type="date"

                                                name="date"

                                                required

                                                min={new Date().toISOString().split('T')[0]}

                                                value={formData.date}

                                                onChange={handleChange}

                                                className="w-full pl-12 py-3 border rounded-xl"

                                            />


                                        </div>

                                    </div>




                                    {/* TIME */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Preferred Time Slot

                                        </label>


                                        <select

                                            name="timeSlot"

                                            value={formData.timeSlot}

                                            onChange={handleChange}

                                            className="w-full mt-2 p-3 border rounded-xl"

                                        >


                                            {
                                                availableSlots[formData.packageType].map((slot) => (


                                                    <option

                                                        key={slot}

                                                        value={slot}

                                                    >

                                                        {slot}

                                                    </option>


                                                ))

                                            }


                                        </select>

                                    </div>




                                    {/* PEOPLE */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Number of Visitors

                                        </label>


                                        <input

                                            type="number"

                                            min="1"

                                            name="guests"

                                            value={formData.guests}

                                            onChange={handleChange}

                                            className="w-full mt-2 p-3 border rounded-xl"

                                        />


                                    </div>





                                    {/* NOTES */}

                                    <div>

                                        <label className="font-bold text-sm">

                                            Additional Requests

                                        </label>


                                        <textarea

                                            name="notes"

                                            rows="3"

                                            value={formData.notes}

                                            onChange={handleChange}

                                            placeholder="Food preferences, group details, etc..."

                                            className="w-full mt-2 p-3 border rounded-xl"

                                        />


                                    </div>




                                    <button

                                        disabled={loading}

                                        className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold"

                                    >


                                        {loading ? 'Submitting...' : 'Reserve Experience'}


                                    </button>



                                </form>

                            </div>





                            {/* SUMMARY */}


                            <div className="space-y-6">


                                <div className="bg-slate-900 text-white rounded-3xl p-6 space-y-5">


                                    <h3 className="font-bold flex items-center gap-2">


                                        <Sparkles />

                                        Experience Summary


                                    </h3>



                                    <p>

                                        Package:<br />

                                        <b>{formData.packageType}</b>

                                    </p>


                                    <p>

                                        Duration:<br />

                                        <b>{formData.duration}</b>

                                    </p>


                                    <p>

                                        Time:<br />

                                        <b>{formData.timeSlot}</b>

                                    </p>



                                    <p>

                                        Visitors:<br />

                                        <b>{formData.guests}</b>

                                    </p>



                                </div>




                                <div className="bg-white rounded-3xl p-6 shadow space-y-3">


                                    <h4 className="font-bold">

                                        Why Choose Haritha Theeram?

                                    </h4>


                                    <ul className="text-sm text-slate-500 space-y-2">

                                        <li>• Women-led responsible tourism initiative</li>

                                        <li>• Explore Arival Thoodu nature trails</li>

                                        <li>• Beginner friendly kayaking</li>

                                        <li>• Supports local community</li>

                                    </ul>


                                </div>


                            </div>



                        </div>

                        )

                }


            </div>

        </div>

    );

}