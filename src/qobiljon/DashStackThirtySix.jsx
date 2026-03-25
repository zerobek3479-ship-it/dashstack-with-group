import { MdPhotoCamera } from "react-icons/md";
import "./DashStackThirtySix.css"

function DashStackThirtySix() {
  return (
    <div className="dashboard">
      <section className="content">
        <header className="page-header">
          <h1 className="title">Add Team Member</h1>
        </header>
        <div className="event-container">
          <div className="upload-box">
            <div className="camera">
              <MdPhotoCamera />
            </div>
            <p className="upload-label">Upload Photo</p>
          </div>
          <form className="form-grid">
            <div className="input-group">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" placeholder="Enter your first name" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" placeholder="Enter your last name" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="text" placeholder="Enter your phone number" />
            </div>
            <div className="input-group">
              <label htmlFor="position">Position</label>
              <input id="position" type="text" placeholder="CEO" />
            </div>
            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender">
                <option>Male</option>
                <option>Female</option>
              </select>
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

export default DashStackThirtySix
