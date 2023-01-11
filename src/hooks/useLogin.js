import { useState, useEffect } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogin = () => {
	const [isCancelled, setIsCancelled] = useState(false)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()
	
	const login = async (email, password) => {
		setError(null)
		setIsPending(true)
		
		try {
			// login the user
			const res = await projectAuth.signInWithEmailAndPassword(email, password)
			
			if(!res){
				throw new Error("Invalid Email or Password")
			}
			
			dispatch({type:'LOGIN', payload: res.user})
			
			if(!isCancelled){
				setIsPending(false)
				setError(null)
			}
		} catch(err){
			if(!isCancelled){
				console.log(err.message)
				setError(err.message)
				setIsPending(false)
			}
		}
		
	}
	
	useEffect(()=>{
		return (()=>setIsCancelled(true))
	},[])
	
	
	return { login, error, isPending }
}