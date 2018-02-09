import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

class App extends Component {
  state = {jobs: []}

  componentDidMount(){
    this.getListings();
  }


  getListings = () => {
    return fetch('./listings.json')
      .then(response => response.json())
      .then(jobs => this.setState({jobs}))
  }

  addJob = (job) => {
    const jobs = this.state.jobs;
    jobs.push(job)
    this.setState({jobs})
  }

  onSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const data = new FormData(form);
    console.log('job', [...data.entries()]);
    this.addJob({
      id: this.state.jobs.length + 1,
      title: data.get('title'),
      pay: data.get('pay'),
      description: data.get('description')
    })
  }



  render() {
    return (
      <div>
        <Header />
        <main>
          <section>
            <JobList jobs={this.state.jobs}/>
          </section>
          <aside id="side-bar">
            <h3>Add a Job</h3>
            <JobForm onSubmit={this.onSubmit} />
          </aside>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
