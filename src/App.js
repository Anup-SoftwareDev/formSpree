import ContactForm from './Form';
import {FormspreeProvider} from '@formspree/react';

const App = () =>{

    return(
  
        <FormspreeProvider project = "1962860304660430753">
          <h1>FormSpree App</h1>
          <ContactForm/>
        </FormspreeProvider>
        )

}

export default App;