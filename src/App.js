import React, { Component } from 'react';
import NavigationBar from './NavBar/NavBar';
import Image1 from './Person1.jpg';
import Image2 from './Person2.jpg';
import Image3 from './Person3.jpg';
import Image4 from './Person4.jpg';

import './App.css';
import Comment from './commentreply';

//when the button is click , the state of state.buttons changes to 1 for and the comment box is seen, when the button is clicked again, state changes to 0 and comment box disappears
class App extends Component {
  state={
    button1: false,
    button2: false,
    button3: false,
    button4: false
  }
  //functions to change states for each button
  togglecomment1Handler = () => {
    const doesShow1 = this.state.button1;
    this.setState({button1: !doesShow1});
    }
    togglecomment2Handler = () => {
      const doesShow2 = this.state.button2;
      this.setState({button2: !doesShow2});
      }
      togglecomment3Handler = () => {
        const doesShow3 = this.state.button3;
        this.setState({button3: !doesShow3});
        }
        togglecomment4Handler = () => {
          const doesShow4 = this.state.button4;
          this.setState({button4: !doesShow4});
          }
  render() {
    
    return (
      
      <div class='bgimg'>
        <div >
        <NavigationBar /> 
        </div> 
        <div className='ContentBox'>

            <div className='commentbox'>
              <div className='user'>
               <img src= {Image1} className='ProfileImages'></img>
               <div className='Dist'>
               <h3>Yuang Chou</h3>
               <h6>12 December 2019</h6>
               </div>
               <h1>It's a great place!</h1>
               <i id='thumbsup' class="fas fa-2x fa-thumbs-up"></i> <i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar" class="fas fa-2x fa-star"></i> <i id="filledstar" class="fas fa-2x fa-star"></i> <i id="filledstar" class="fas fa-2x fa-star"></i>
              <p>I had a great time. There is so much to do. I love the beach, the hotel I stated at was awesome. There are plenty of places to shop at. All the name brand stores are there Chanel, Fendi, Coach about 3 of them, Guess, etc. I like the Dole Plantation, Diamond Head, and Pearl Harbor was a nice visit. You do not have to book the expense tours unless you really can afford it. The bus take you everywhere you need to go.<span className='transparency'> I do not recommend Gernamin Laua. The food was awfull. The people were great and you do get 3 very strong drinks. The drinks are strong to make you forget how terrible the food was. My hotel was the Ohana Mali</span>.</p>
              <div>
              {this.state.button1?<Comment />:null}
              </div>
              <div>
              {this.state.button1?<button id='submitbutton' className="commentbutton" >Submit</button>:<button className="commentbutton" onClick={this.togglecomment1Handler}>Comment</button>}</div>
              </div>
               


            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image2} className='ProfileImages'></img>
               <div className='Dist'>
               <h3>Justin Wells</h3>
               <h6>21 September 2020</h6>
               </div>
               <h1>Quite Disappointing</h1>
               <i id="thumbsdown" class="fas fa-2x fa-thumbs-down"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="emptystar"  class="far fa-2x fa-star"></i> <i id="emptystar" class="far fa-2x fa-star"></i> <i id="emptystar" class="far fa-2x fa-star"></i>
               <p>I had a great time. There is so much to do. I love the beach, the hotel I stated at was awesome. 
                 There are plenty of places to shop at. All the name brand stores are there Chanel, 
                 Fendi, Coach about 3 of them, Guess, etc. I like the Dole Plantation, Diamond Head, and 
                 Pearl Harbor was a nice visit. You do not have to book the expense tours unless you really can afford it. 
                 The bus take you everywhere you need to go. I do not recommend Gernamin Laua. The food was awfull. The people 
                 were great and you do get 3 very strong drinks. The drinks are strong to make you forget how terrible the food was. 
                 My hotel was the Ohana Mali.</p>
                 <div>
              {this.state.button2?<Comment />:null}
              </div>
              <div>
              {this.state.button2?<button id='submitbutton' className="commentbutton" >Submit</button>:<button className="commentbutton" onClick={this.togglecomment2Handler}>Comment</button>}</div>
                 </div>
               

            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image3} className='ProfileImages'></img>
               <div className='Dist'>
               <h3>Karinna Dumbfrey</h3>
               <h6>10 May 2018</h6>
               </div>
               <h1>Delightful</h1>
               <i id='thumbsup' class="fas fa-2x fa-thumbs-up"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar"  class="fas fa-2x fa-star"></i> <i id="filledstar" class="fas fa-2x fa-star"></i> <i id="emptystar" class="far fa-2x fa-star"></i>
               <p>I had a great time. There is so much to do. I love the beach, the hotel I stated at was awesome. 
                 There are plenty of places to shop at. All the name brand stores are there Chanel, Fendi, Coach 
                 about 3 of them, Guess, etc. I like the Dole Plantation, Diamond Head, and Pearl Harbor was a nice
                  visit. You do not have to book the expense tours unless you really can afford it. The bus take you 
                  everywhere you need to go. I do not recommend Gernamin Laua. The food was awfull. The people were
                   great and you do get 3 very strong drinks. The drinks are strong to make you forget how terrible 
                   the food was. My hotel was the Ohana Mali.</p>
                   <div>
              {this.state.button3?<Comment />:null}
              </div>
              <div>
              {this.state.button3?<button id='submitbutton' className="commentbutton" >Submit</button>:<button className="commentbutton" onClick={this.togglecomment3Handler}>Comment</button>}</div></div>
               

            </div>
            <div className='commentbox'>
            <div className='user'>
               <img src= {Image4} className='ProfileImages'></img>
               <div className='Dist'>
               <h3>Aloce Cooper</h3>
               <h6>26 January 2020</h6>
               </div>
               <h1>Waste of Money</h1>
               <i id="thumbsdown" class="fas fa-2x fa-thumbs-down"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="filledstar" class="fas fa-2x fa-star"></i><i id="emptystar"  class="far fa-2x fa-star"></i> <i id="emptystar" class="far fa-2x fa-star"></i> <i id="emptystar" class="far fa-2x fa-star"></i>
               <p>I had a great time. There is so much to do. I love the beach, the hotel I stated at was awesome. 
                 There are plenty of places to shop at. All the name brand stores are there Chanel, Fendi, 
                 Coach about 3 of them, Guess, etc. I like the Dole Plantation, Diamond Head, and Pearl Harbor was a 
                 nice visit. You do not have to book the expense tours unless you really can afford it. The bus take 
                 
                 you everywhere you need to go. I do not recommend Gernamin Laua. The food was awfull. The people were 
                 great and you do get 3 very strong drinks. The drinks are strong to make you forget how terrible the food was. 
                 My hotel was the Ohana Mali.</p>
                 <div>
              {this.state.button4?<Comment />:null}
              </div>
              <div>
              {this.state.button4?<button id='submitbutton' className="commentbutton" >Submit</button>:<button className="commentbutton" onClick={this.togglecomment4Handler}>Comment</button>}</div></div>
               
               
            </div>

        </div> 
        <footer>
          <h6> &#169; 1999-2020 Holiday Check AG</h6>
        </footer>
        </div> 
        
      

    );
  }
}

export default App;
