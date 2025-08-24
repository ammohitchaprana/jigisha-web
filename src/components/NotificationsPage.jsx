import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../assets/styles/components/NotificationsPage.css';

const NotificationsPage = () => {
  const allNotifications = [
    {
      id: 17,
      title: "Free Stationery and National Flag Distribution for All Students at Rural Government Primary Schools",
      date: "August 3, 2025",
      link: "/gallery?notification=17"
    },
    {
      id: 16,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 4)",
      date: "July 2, 2025",
      link: "/gallery?notification=16"
    },
    {
      id: 15,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 3)",
      date: "July 1, 2025",
      link: "/gallery?notification=15"
    },
    {
      id: 14,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 2)",
      date: "June 30, 2025",
      link: "/gallery?notification=14"
    },
    {
      id: 13,
      title: "Free Food & Water Distribution for PCS Main Exam Candidates at Public Service Commission Center (Day 1)",
      date: "June 29, 2025",
      link: "/gallery?notification=13"
    },
    {
      id: 1,
      title: "Free Food & Water Distribution at Queen Mary Hospital, KGMU for Patient Attendants",
      date: "Dec 26, 2024",
      link: "/gallery?notification=1"
    },
    {
      id: 2,
      title: "Free Food & Water Distribution for PCS-Pre Candidates from Remote Districts",
      date: "Dec 22, 2024",
      link: "/gallery?notification=2"
    },
    {
      id: 5,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 22, 2021",
      link: "/gallery?notification=5"
    },
    {
      id: 6,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 15, 2021",
      link: "/gallery?notification=6"
    },
    {
      id: 7,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 8, 2021",
      link: "/gallery?notification=7"
    },
    {
      id: 4,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "June 1, 2021",
      link: "/gallery?notification=4"
    },
    {
      id: 3,
      title: "Free Food & Fruit distribution at KGMU Trauma Center during COVID-19 Wave 2",
      date: "May 29, 2021",
      link: "/gallery?notification=3"
    },
    {
      id: 12,
      title: "New Year Celebration at Both Free Tuition Centers",
      date: "January 2, 2015",
      link: "/gallery?notification=12"
    },
    {
      id: 11,
      title: "Warm Clothes Distribution at Both Free Tuition Centers",
      date: "December 20, 2014",
      link: "/gallery?notification=11"
    },
    {
      id: 10,
      title: "Children's Day Celebration at Both Free Tuition Centers",
      date: "November 14, 2014",
      link: "/gallery?notification=10"
    }
  ];

  return (
    <div className="notifications-page">
      <Header />
      <section className="section notifications-section">
        <div className="container">
          <div className="section-header">
            <h1>All Notifications</h1>
            <p>Stay updated with all our community events and initiatives</p>
            <div className="underline"></div>
          </div>
          
          <div className="notifications-container">
            {allNotifications.map((notification, index) => (
              <div key={notification.id} className="notification-item">
                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p className="notification-date">{notification.date}</p>
                </div>
                <Link to={notification.link} className="view-gallery-btn">
                  View Gallery
                </Link>
              </div>
            ))}
          </div>
          
          <div className="back-to-home">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotificationsPage;
