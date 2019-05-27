import React, { Component } from 'react';
import '../App.css';
import Footer from './Footer';
import Header from './Header'
import { ReactComponent as Minus } from '../assets/ic_minus16.svg';
import { ReactComponent as Plus } from '../assets/ic_plus16 copy.svg';

var list = [{
  num: 1,
  text: 'Getting start'
},
{
  num: 2,
  text: 'About the Pickup'
},
{
  num: 3,
  text: 'About the cable drum'
},
{
  num: 4,
  text: 'About the Cash Back'
},
{
  num: 5,
  text: 'About Charity Donations'
}
]

var listContent = [{
  title: 'Getting Start',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
},
{
  title: 'About the Pickup',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
},
{
  title: 'Getting Starts',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
}
]
class QA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      expand: false
    }
  }


  render() {
    return (
      <div>
        <Header />
        <div className='QA-title'>
          <div className='leftSide'></div>
          <div className='title-QA'>
            <text className='QA-heading'>Q&A</text>
            <p className='QA-titleText'>Har finner du svaren pa de vanligest <br /> fragorner Finner du innite det du Soker ar du <br /> valkommem att  kontakta ass via chatten.</p>
          </div>
        </div>
        <div>
          <div className="termAndConditionContent">
            <div className='leftSide'></div>
            <div className="table-content QAtable">
              <div className='content-margin'>
                <text className='titleTableContent'>Table of Contents</text>
              </div>
              {
                list.map((item, index) => {
                  return (
                    <div>
                      <a href={`#${index}`} >
                        <p className='listItem' style={index === this.state.count ? { color: 'red' } : { color: 'black' }} onClick={() => this.setState({ count: index })}>{`${item.num}. ${item.text}`}</p>
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <div className="content-view">
              {
                listContent.map((item, ind) => {
                  return (
                    <div className='QA-listContent'>
                      <div className='QA-listContent'>
                        <text id={ind} className='listContent-title'>{item.title}</text>
                      </div>
                      {
                        item.listItem.map((i, index) => {
                          return (
                            <div className='listItemQA'>
                              <p className='listItem-text'>
                                {this.state.indNum === index && this.state.expand && this.state.ind === ind ?
                                  <Minus style={{ paddingRight: '14px', marginLeft: '0px', cursor: 'pointer' }} onClick={() => this.setState({ expand: false, indNum: null, ind: null })} />
                                  :
                                  <Plus style={{ paddingRight: '14px', marginLeft: '0px', cursor: 'pointer' }} onClick={() => this.setState({ expand: true, indNum: index, ind: ind })} />
                                }
                                {i.text}
                              </p>
                              {this.state.expand && this.state.indNum === index && this.state.ind === ind &&

                                <p className='drums-text'> Har finner du svaren pa de vanligest  fragorner Finner du innite det du Soker ar du  valkommem att  kontakta ass via chatten.</p>
                              }

                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
            <div className='rightSide'></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default QA;
