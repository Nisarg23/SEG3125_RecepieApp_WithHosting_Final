import React from 'react';

const Recepie = () => {
  return (
    <div
    style={{
      backgroundColor: '#e6f9ff',
    }}
  >
    <div
      style={{
        backgroundColor: '#e6f9ff',
        margin: '0 auto',
        height: '80vh'
      }}>
        <div style={{
        textAlign: 'center',
        fontSize: 'larger',
        margin: '0 auto',
        padding: '15px'
      }}> Recepie Ingredinets</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '5px',
        gridAutoRows: 'minmax(100px, auto)'
      }}>
        <div class="wrapper2">
          <h4>Flour</h4>
            <img class="image" src={require('../images/flour.png')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          <h4>10 grams</h4>
        </div>

        <div class="wrapper2">
          <h4>Flour</h4>
            <img class="image" src={require('../images/flour.png')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          <h4>10 grams</h4>
        </div>

        <div class="wrapper2">
          <h4>Flour</h4>
            <img class="image" src={require('../images/flour.png')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          <h4>10 grams</h4>
        </div>

        <div class="wrapper2">
          <h4>Flour</h4>
            <img class="image" src={require('../images/flour.png')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          <h4>10 grams</h4>
        </div>

        <div class="wrapper2">
          <h4>Flour</h4>
            <img class="image" src={require('../images/flour.png')} alt='Recepie' style={{
              width: '35%',
              height: '30%'
            }}/> 
          <h4>10 grams</h4>
        </div>


      </div>
    </div>
    </div>
  );
};

export default Recepie;
