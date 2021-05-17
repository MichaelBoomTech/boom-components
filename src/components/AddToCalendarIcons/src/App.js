import AddShareIcons from './lib/index';

function App() {

  return (
    <div className="App">
      <AddShareIcons
          event={{"id":343491,"title":"Open Air Poetry Reading and Discussion","start":"2021-04-21","end":"2021-04-27","all_day":1,"image":"https:\/\/static.wixstatic.com\/media\/11062b_b31efefcdf3846849b7fe93d9203f105~mv2_d_6200_4132_s_4_2.jpg","desc":"<p>Four amazing evenings of poetry reading and discussion! We will do a poetry reading from various poets followed by an interactive discussion. Each day there will be three poets whose works will be read and discussed.<br>If you want to attend and listen to some great poetry, please register. Our organizers will get back to you.<\/p>","color":"color-13","venue":{"name":"Virginia Road","address":"1485 Virginia Road, San Marino, CA 91108, USA","city":"","statesList":"","country":"","postal":"","phone":"","email":"","website":"","showMap":"1","showMapLink":"1","lat":"34.1204167","long":"-118.1201348"},"organizer":{"name":"","phone":"","website":"","email":""},"repeat":{"type":"","interval":"","end":"","advanced":"","exclude":""},"kind":"0","categories":[],"guests":[],"registration":null,"tickets":null}}
          showAddToIcons={true}
          addToSectionTitle={'copied'}
          addToIconsCustomClassNames={[]}
          showShareIcons={true}
          shareSectionTitle={'copied'}
          shareIconsCustomClassNames={[]}
          copyUrlText={'copied'}
          boomEventUrlBase={''}
      />
    </div>
  );
}

export default App;

// title
// formattedStartDate={}
// formattedEndDate={}