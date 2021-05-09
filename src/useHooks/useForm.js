import { useState } from 'react';

const useForm = (toggleModal) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    submitted: false,
    valid: false,
  });

  const handleEmailValidation = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    if (
      inputs.name &&
      handleEmailValidation(inputs.email) &&
      inputs.subject &&
      inputs.message
    ) {
      setServerState({ valid: true });
      setServerState({ submitting: true });
      fetch(`https://formspree.io/f/${process.env.REACT_APP_FORMSPREE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      })
        .then((response) => response.json())
        .then((data) => {
          setServerState({ submitting: false });
          console.log('Success', data);
          toggleModal();
          setInputs({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        })
        .catch((error) => {
          setServerState({ submitting: false });
          setServerState({ submitted: true });
          console.log('Error:', error);
        });
    } else {
      setServerState({ submitted: true });
      return;
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
    serverState,
    handleEmailValidation,
  };
};

export default useForm;
