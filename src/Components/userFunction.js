import axios from 'axios'

export const employ = user => {
    return axios
        .post('employees', {
            name: user.name,
            place: user.place,
            designation: user.designation,
            technologies: user.technologies
        })
        .then(res => {
            console.log('employees')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const tech = user => {
    return axios
        .post('techstacks', {
            experience: user.experience,
        })
        .then(res => {
            console.log('techstacks')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const projects = user => {
    return axios
        .post('project/:employee_id', {
            project: user.project
        })
        .then(res => {
            console.log('project/:employee_id')
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}