import { useState, useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({ uid }){
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const { addDocument, response } = useFirestore('transactions')
	
	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({
						 uid,
						 name, 
						 amount
		})
	}
	
	useEffect(()=>{
		if(response.success){
			setName('')
			setAmount('')
		}
	}, [response.success])
	
	return (
		<>
			<h3>Add a Transaction</h3>
			<form>
				<label>
					<span>Transaction Name:</span>
					<input type="text"
							 required
							 onChange={(e)=>setName(e.target.value)}
							 value={name}></input>
				</label>
				<label>
					<span>Amount ($):</span>
					<input type="number"
							 required
							 onChange={(e)=>setAmount(e.target.value)}
							 value={amount}></input>
				</label>
				<button onClick={handleSubmit}>Add Transaction</button>
			</form>
		</>
	)
}