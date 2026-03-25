import { MdPhotoCamera } from "react-icons/md";
import "./DashStackThirtySeven.css"

function DashStackThirtySeven() {
  return (
    <div className="dashboard">
      <section className="content">
        <header className="page-header">
          <h1 className="title">General Settings</h1>
        </header>
        <div className="settings-container">
          <div className="upload-box">
            <div className="camera">
              <MdPhotoCamera />
            </div>
            <p className="upload-label">Upload Logo</p>
          </div>
          <form className="form-grid">
            <div className="input-group">
              <label htmlFor="site-name">Site Name</label>
              <input id="site-name" type="text" placeholder="Bright Web" />
            </div>
            <div className="input-group">
              <label htmlFor="copyright">Copy Right</label>
              <input id="copyright" type="text" placeholder="All rights Reserved@brightweb" />
            </div>
            <div className="input-group">
              <label htmlFor="seo-title">SEO Title</label>
              <input id="seo-title" type="text" placeholder="Bright web is a hybrid dashboard" />
            </div>
            <div className="input-group textarea">
              <label htmlFor="seo-description">SEO Description</label>
              <textarea id="seo-description" placeholder="Bright web is a hybrid dashboard"></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="seo-keywords">SEO Keywords</label>
              <input id="seo-keywords" type="text" placeholder="CEO" />
            </div>
          </form>
          <div className="action-row">
            <button className="save-btn">Save</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashStackThirtySeven
