
import "./Form-components.css"
import {useState } from "react"; 


function FormComponents() {
    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [submitted, setSubimtted] = useState(false); 
    const [submittedName, setSubimttedName] = useState("");


    const thinksMsg = (e) => {
      e.preventDefault();

      setSubimttedName(FName);
      setSubimtted(true);

      setTimeout(() => {
        setSubimtted(false);
        setSubimttedName("");
      }, 7000);


      // reset all fields
      setFName("");
      setLName("");
      setEmail("");
      setPhone("");
      setDate("");
      setPlace("");
      setGender("");
      setNationality("");
      setConfirm(false);
    };

    return (
    <>
    <div className="card">
      <h1>Personal Form</h1>

      {
        submitted && (
          <div className="success-msg">
            Thank you {submittedName}!, your form has been submitted
          </div>  
        )
      }

      <form onSubmit={thinksMsg}>

        <label>
          First Name: 
          <input type="text" value={FName} onChange={(e) => setFName(e.target.value)} placeholder="Enter your First Name" required/>
        </label>
        <label>
          Last Name: 
           <input type="text" value={LName} onChange={(e) => setLName(e.target.value)} placeholder="Enter your Last Name" required/>
        </label> 

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="a@b.com" required/>
        </label>

        <label>
          Phone: 
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="05xxxxxxxx" required/>
        </label>

        <label>
          Date of birth: 
          <input type="date" value={Date} onChange={(e) => setDate(e.target.value)} required/>
          </label> 

          <label>
            Place of birth: 
            <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter your Place of birth" required/>
          </label>

          <label className="gender">
            Gender:
            <input type="radio" className="options" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value)} required/> Female
            <input type="radio" className="options" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value)} required/> Male
          </label>

          <label className="nationality">
            Nationality:
            <select name="dropdown" value={nationality} onChange={(e) => setNationality(e.target.value)} required>
              <option className="option" value="" > Select </option>
              <option className="option" value="Saudi" > Saudi </option>
              <option className="option" value="Other"> Other </option>
            </select>
          </label>

          <label className="confirm">
            I confirm that all the information above is correct.
            <input type="checkbox" checked={confirm} onChange={(e) => setConfirm(e.target.checked)} required/> 
          </label>

        <button type="submit">Submit</button>
      </form>
  </div>
  </>
   )
}

export default FormComponents;