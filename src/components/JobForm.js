import React from 'react';

export default function JobForm({ onSubmit }){

    return (<form className="job-form" onSubmit={onSubmit}>
    <label htmlFor="title">Title</label>
    <input type="text" className="title" name='title' />
    <label htmlFor="pay">Compensation</label>
    <input type="text" className="pay" name='pay'/>
    <label htmlFor="description">Description</label>
    <textarea className="description" rows="8" cols="40" name='description'></textarea>
    <input type="submit" className="submit" value="Submit"  />
  </form>)
}
