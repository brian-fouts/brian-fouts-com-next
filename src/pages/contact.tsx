import toast from 'react-hot-toast';

export default function Contact({ }) {
    return (
        <div className="page">
            <h1>Contact</h1>
            <button onClick={() => toast.success('Success')}>Submit</button>
        </div>
    )
  }