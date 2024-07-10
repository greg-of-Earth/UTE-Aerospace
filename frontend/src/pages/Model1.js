import Model1Spec from '../components/Model1Spec';
import Header from '../components/Header';
import HeaderImg from '../components/HeaderImg'
import HeadTitle from  '../components/HeaderTitle';
import model1 from '../assets/model_sketch.png';


function Model1Page() {
  return (
    <>
     <Header>
      <HeaderImg src = { model1 }  />
      <HeadTitle headTitle= "Model 1" color="black" style={{ top: '10%'}}/>
     </Header>
      <Model1Spec /> 
    </>
  );
}

export default Model1Page;


