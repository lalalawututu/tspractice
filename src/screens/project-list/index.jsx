import React from 'react'
import {SearchPanel} from './search'
import {List} from './list'
import {useState, useEffect} from 'react'
import {cleanObject} from '../../utils'
import * as qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL
console.log(process.env)

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })

  const [list, setList] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if(response.ok) {
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async response => {
      if(response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List users={users} list={list}/>
  </div>
}