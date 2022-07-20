import React, { useState }  from 'react';
import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';

const message = {
  en: {
    heading: 'Try New Recipies Everyday',
    second: 'Cooking tips and tricks, videos by professionals,', 
    subheading: 'and our favorite recipes from around the world',
    title: 'wide web!',
    button:'Read Full Article'
  },
  es: {
    heading: 'Essayez de nouvelles recettes tous les jours',
    second:'Trucs et astuces culinaires, vidéos de professionnels,',
    subheading: 'et nos recettes préférées du monde entier',
    title: 'toile large!',
    button: 'Lire larticle complet'
  },
};


const Home = (props) => {

  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };
  return (
    <>
    <select onChange={handleChange} defaultValue={locale} 
    style={{
      backgroundColor: 'red',
    }}> 
        {['en', 'es'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <IntlProvider locale={locale} messages={message[locale]}>
      <div
      style={{
        display: 'flex',
        height: '90vh'
      }}
    >
      <div 
      style={{
        position: 'absolute',
        zIndex: '100',
        left: '0px',
        width: '50%',
        padding: '40px'
      }}>
        <p style={{
        fontSize:'300%',
        padding: '20px'
      }} >
        <FormattedMessage id="heading"
        defaultMessage="some default one"
        values={{ locale }} 
        ></FormattedMessage> 

          </p>

          <p style={{
        padding: '20px'
      }} >
        <FormattedMessage id="second"
        defaultMessage="some default one"
        values={{ locale }} 
        ></FormattedMessage> 

          </p>

          <p style={{
        padding: '20px'
      }} >
        <FormattedMessage id="subheading"
        defaultMessage="some default one"
        values={{ locale }} 
        ></FormattedMessage> 

          </p>

          <p style={{
        padding: '20px'
      }} >
        <FormattedMessage id="title"
        defaultMessage="some default one"
        values={{ locale }} 
        ></FormattedMessage> 

          </p>
        
        <button style={{
        padding: '20px'
      }}
      
      type="submit"><FormattedMessage id="button"
      defaultMessage="some default one"
      values={{ locale }} 
      ></FormattedMessage> </button>
        </div>
      
        <img style={{
        position: 'absolute',
        bottom: '0px',
        right: '0px',
        height: '80%',
        width: '80%'
      }}
      src={require('../images/background.jpg')} alt='logo' />
    </div>
      </IntlProvider>
    
    </>
  );
};

export default Home;
