import { FormEvent, useRef } from "react";

export const Contact: React.FunctionComponent = () => {
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const validateEmail = (email: string): boolean => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // PLAR Requirement 2.4.6 c)
  const handleBlur = () => {
    const email = emailRef?.current?.value;

    if (!validateEmail(email)) {
      // PLAR Requirement 2.4.6 d)
      alert("Invalid Email Address");
    }
  };

  // PLAR Requirement 2.4.6 e)
  const handleSubmit = (event: FormEvent) => {
    const email = emailRef?.current?.value;
    const subject = subjectRef?.current?.value;
    const message = messageRef.current?.value;

    if (validateEmail(email)) {
      const mailToLink = `mailto:${email}?subject=${subject}&body=${message}`;
      window.location.href = mailToLink;
    } else {
      // PLAR Requirement 2.4.6 d)
      alert("Invalid Email Address");
    }
    event.preventDefault();
  };

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Looking for a quote? Want more information about the services we
          provide? Let us know.
        </p>
        {/* PLAR Requirement 2.4.4 a) */}
        <div className="flex mb-8 lg:mb-16">
          <table className="flex-auto table-auto border-collapse border border-slate-500">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-600">
                  studioxdesgin@shaw.ca
                </td>
                <td className="border border-slate-600">(780) 886-6528</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PLAR Requirement 2.4.3 a) */}
        {/* PLAR Requirement 2.4.7 d) */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your email
            </label>
            {/* PLAR Requirement 2.4.3 b) */}
            {/* PLAR Requirement 2.4.3 c) */}
            <input
              onBlur={handleBlur}
              ref={emailRef}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              ref={subjectRef}
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-accent focus:border-accent"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Your message
            </label>
            <textarea
              ref={messageRef}
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-accent focus:border-accent"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-accent sm:w-fit hover:bg-accent focus:ring-4 focus:outline-none focus:ring-accent"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};
