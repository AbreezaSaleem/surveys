import React, { useState, useEffect, } from 'react';

import Navbar from '../shared/Navbar'
import SurveyList from './SurveyList.js'

import { api, parseJwt } from '../../utils';

function Dashboard(props) {
  const [ templates, setTemplates ] = useState();
  const [ user, setUser ] = useState();

  useEffect(async () => {
    async function fetchUser() {
      const { email } = parseJwt(localStorage.getItem('token'))
      const user = await api(`user?email=${email}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        }
      })
      setUser(user)
      console.log('user fetched', user)
    }
    await fetchUser()
  }, [])

  useEffect(() => {
    async function fetchTemplates() {
      console.log('now were fetching templaes', user)
      const templates = await api(`templates?id=${user.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, 
        }
      })
      setTemplates(templates)
    }
    user && fetchTemplates()
  }, [user])


  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>

      <SurveyList />
    </div>
  );
}

export default Dashboard;