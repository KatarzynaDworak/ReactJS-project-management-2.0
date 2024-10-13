import React from 'react';

const MainBoard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Manage Tasks, Boost Productivity</h2>
          <p className="text-lg mb-6">
            Organize, track, and collaborate on your projects with ease. Whether you work alone or with a team, our Kanban tool helps you stay on top of your work.
          </p>
          <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Why Choose Management Project?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Easy Task Management</h4>
              <p>Keep track of all your tasks in one place with a simple, intuitive interface.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Team Collaboration</h4>
              <p>Assign tasks, share updates, and collaborate with your team seamlessly.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-4">Customizable Boards</h4>
              <p>Tailor your boards to fit the workflow that works best for you and your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6">Start Your Journey with Management Project</h3>
          <p className="mb-8">Join thousands of users who’ve boosted their productivity with Kanban Project.</p>
          <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default MainBoard;
