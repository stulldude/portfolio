import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                {icons.class === "selenium" ?
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px"><path fill="#222529" d="M83.1,80.5c-4.7-0.1-8.8,3.4-9.3,8.1c0,0.2,0.1,0.3,0.3,0.3c0,0,0,0,0,0h18c0.2,0,0.3-0.1,0.3-0.3c0,0,0,0,0,0 C92,83.8,87.9,80.2,83.1,80.5z"/><path fill="#222529" d="M121.7,19.9l-38.4,43c-0.4,0.5-1.2,0.5-1.7,0.1c0,0,0,0-0.1-0.1L62.1,42.8c-0.4-0.4-0.4-1-0.1-1.5l6.5-8.3 c0.4-0.5,1.1-0.7,1.6-0.3c0.1,0.1,0.2,0.1,0.2,0.2l11,12.1c0.4,0.5,1.2,0.5,1.7,0.1c0,0,0.1-0.1,0.1-0.1l30.7-41.7 c0.3-0.4,0.2-0.9-0.2-1.2c-0.1-0.1-0.3-0.1-0.5-0.2H5.7C5.2,2,4.8,2.4,4.8,2.9v122.2c0,0.5,0.4,0.9,0.9,0.9h116.6 c0.5,0,0.9-0.4,0.9-0.9V20.5c0-0.5-0.4-0.8-0.8-0.8C122.1,19.6,121.9,19.7,121.7,19.9z M37.9,112.4c-7.7,0.3-15.2-2.3-20.9-7.4 c-0.4-0.4-0.5-1-0.1-1.5l4.5-6.4c0.4-0.5,1.1-0.6,1.6-0.3c0,0,0.1,0.1,0.1,0.1c4.2,3.9,9.6,6,15.3,6c6,0,8.9-2.8,8.9-5.7 c0-9.1-29.5-2.8-29.5-22.1c0-8.5,7.4-15.6,19.4-15.6c6.9-0.2,13.7,2.1,19.1,6.5c0.4,0.4,0.5,1.1,0.1,1.5l-4.7,6.2 c-0.4,0.5-1.1,0.6-1.6,0.2c0,0,0,0,0,0c-4-3.2-8.9-4.9-14-4.8c-4.7,0-7.3,2.1-7.3,5.1c0,8.1,29.4,2.7,29.4,21.8 C58.3,105.3,51.6,112.4,37.9,112.4z M102.2,94.6c0,0.6-0.5,1-1,1h0H74.3c-0.2,0-0.3,0.1-0.3,0.3c0,0,0,0,0,0 c0.9,5.2,5.6,8.8,10.9,8.5c3.4-0.1,6.6-1.1,9.3-3.1c0.4-0.3,1.1-0.3,1.4,0.2c0,0,0,0,0.1,0.1l3.3,4.8c0.3,0.4,0.2,1-0.2,1.4 c-4.3,3.2-9.6,4.8-14.9,4.6c-11.6,0-20.3-7.8-20.3-20c-0.3-10.7,8.1-19.6,18.8-19.9c0.3,0,0.6,0,0.9,0c11.3,0,19.1,8.5,19.1,20.9 L102.2,94.6z"/></svg>
                      <p className="text-center" style={{ fontFamily: "devicon", fontSize: "9px" }}>
                        {icons.name}
                      </p>
                  </div>
                :
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
                }
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {title}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description">{description}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
