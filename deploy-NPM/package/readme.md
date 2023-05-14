<div align="center">
        <a href="https://github.com/iamatulbansal/react-power-up" title="React Power Up">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKwz6LVnVJtzrY5Lb2ElgQHG4s-vO_2BlMZS5kb0I3HDwC1vOcYQ8n9WK_HRV5eTKgkEpEHI8UMN_ulOrnidVbF58ryLytoUw0_3RrRDPjUKhubT5IBc5yKhPR1ZHbTtNg8Gvt--CxwDRKQHpkAjzWVndz78ABGL1q9ZPlxDgT9PyzTojbd2tE3LPONg/s1920/poster.jpg" alt="React-power-up" />
        </a>
</div>
<p align="center">
  <a href="https://github.com/iamatulbansal/react-power-up">Repository</a> 
</p>

### Features

- useOnline
- New update coming soon...

### Install

      npm install react-power-up

### Quickstart

```jsx
import { useOnline } from "react-power-up";

const Home = () => {
  //Check internet is available or not
  const isOnline = useOnline();

  return (
    <div>
      <h1>Home</h1>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
    </div>
  );
};
export default Home;
```
### Hooks Details
- useOnline
```jsx
import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        //LOGIC FOR CHECK USER NETWORK IS ONLINE OR OFFLINE
        const handleOnline = () => {
            setIsOnline(true);
        };
        const handleOffLine = () => {
            setIsOnline(false);
        };
        //EVENT LISTENER
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffLine);

        return () => {
            //CLEAN-UP
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffLine);
        };
    }, []);
    //RETURN STATEMENT
    return Boolean(isOnline);
};
export default useOnline;
```


### Contributors

- Always welcome for contributing...[[Become a contributor](https://github.com/iamatulbansal/react-power-up)]
- Open-source free to use and modify 
