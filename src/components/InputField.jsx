import { useState } from "react";

const InputField = ({ type, placeholder, icon }) => {
  // State to toggle password visibility
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    // Wraps the input field and icons inside a container.
    <div className="input-wrapper"> 

      {/* Changes type dynamically between "text" and "password" */}
      <input type={isPasswordShown ? 'text' : type} placeholder={placeholder}  className="input-field" required/>

{/* Displays an input-related icon (e.g., "mail" or "lock"). */}
      <i className="material-symbols-rounded">{icon}</i>
    
      {/* Shows an eye icon only for password fields. */}
      
      {type === 'password' && (
        
        // Toggles password visibility when the eye icon is clicked.
        <i onClick={() => setIsPasswordShown(prevState => !prevState)} className="material-symbols-rounded eye-icon">
          {isPasswordShown ? 'visibility' : 'visibility_off'}
        </i>
      )}
    </div>
  )
}

export default InputField;