import React from 'react';

const Contact = () => {
    return (
        //simple contact page with tailwind css didnt feel the need to "componentize" anything here, so i kept it simple
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg mb-6">
                Feel free to reach out to me for any questions you may have on the project.
            </p>
            <div className="space-y-4">
                <div>
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="text-gray-700"><a href='mailto:bangerter.spencer@gmail.com'>bangerter.spencer@gmail.com</a></p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Phone</h2>
                    <p className="text-gray-700">801-702-7862</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">LinkedIn</h2>
                    <a
                        href="https://www.linkedin.com/in/spencer-bangerter-336975162/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Profile
                    </a>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">GitHub</h2>
                    <a
                        href="https://github.com/SpencerBangerter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        github.com/spencerbangerter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;