import { MdPhotoCamera } from "react-icons/md";
import "./DashStackThirtyFive.css"

function DashStackThirtyFive() {
  return (
    <div className="dashboard">
      <section className="content">
        <header className="page-header">
          <h1 className="title">Add New Event</h1>
        </header>
        <div className="event-container">
          <div className="upload-box">
            <div className="camera">
              <MdPhotoCamera />
            </div>
            <p className="upload-label">Upload Cover Photo</p>
          </div>
          <form className="form-grid">
            <div className="input-group">
              <label htmlFor="event-name">Event Name</label>
              <input id="event-name" type="text" placeholder="Enter event name" />
            </div>
            <div className="input-group">
              <label htmlFor="event-time">Time</label>
              <input id="event-time" type="text" placeholder="12:34 BDT" />
            </div>
            <div className="input-group">
              <label htmlFor="event-date">Date</label>
              <input id="event-date" type="date" />
            </div>
            <div className="input-group">
              <label htmlFor="event-address">Address</label>
              <input id="event-address" type="text" placeholder="Address" />
            </div>
            <div className="input-group">
              <label htmlFor="event-contact">Contact Number</label>
              <input id="event-contact" type="text" placeholder="Enter your Contact Number" />
            </div>
          </form>
          <div className="action-row">
            <button className="add-btn">Add Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashStackThirtyFive
