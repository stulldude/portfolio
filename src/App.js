import React, { Component, lazy, Suspense } from "react";
import $ from "jquery";
import "./App.scss";

import Header from "./components/Header";
const Footer = lazy(() => import("./components/Footer"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    var resumePath = `res_primaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document.getElementById(oppositeLangIconId);
    document.getElementById(pickedLangIconId);
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Header sharedData={this.state.sharedData.basic_info} />
        <Suspense fallback={<p/>}>
          <About
            resumeBasicInfo={this.state.resumeData.basic_info}
            sharedBasicInfo={this.state.sharedData.basic_info}
          />
        </Suspense>
        <Suspense fallback={<p />}>
          <Projects
            resumeProjects={this.state.resumeData.projects}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </Suspense>
        <Suspense fallback={<p />}>
          <Skills
            sharedSkills={this.state.sharedData.skills}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </Suspense>
        {/* <Suspense fallback={<p />}>
          <Experience
            resumeExperience={this.state.resumeData.experience}
            resumeBasicInfo={this.state.resumeData.basic_info}
          />
        </Suspense> */}
        <Suspense fallback={<p />}>
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </Suspense>
      </div>
    );
  }
}

export default App;
