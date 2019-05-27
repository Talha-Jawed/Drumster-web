import React, { Component } from 'react'
import '../App.css'
import Footer from './Footer'
import Header from './Header'

var list = [{
  num: 1,
  text: 'General Application'
},
{
  num: 2,
  text: 'Scope of Engagement'
},
{
  num: 3,
  text: 'Perfomence of Engagement'
},
{
  num: 4,
  text: 'About Payment'
},
{
  num: 5,
  text: 'Lorem ipsum'
},
{
  num: 6,
  text: 'Quisque Pretium'
},
{
  num: 7,
  text: 'Dolor et estavada'
},
{
  num: 8,
  text: 'Scope of Engagement'
},
{
  num: 9,
  text: 'Perfomence of Engagement'
},
{
  num: 10,
  text: 'About Payment'
},
{
  num: 11,
  text: 'Lorem ipsum'
},
{
  num: 12,
  text: 'Quisque Pretium'
},
{
  num: 13,
  text: 'Dolor et estavada'
},
]

var listContent = [{
  title: '1.1 Lorem ipsum',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  title2: '1.2 To tem faccullorro magnet',
  content2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
},
{
  title: '2.1 Lorem ipsum',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  title2: '2.2 To tem faccullorro magnet',
  content2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
},
{
  title: '3.1 Lorem ipsum',
  content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
  title2: '3.2 To tem faccullorro magnet',
  content2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
},
]

class TermAndCondition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  render() {
    return (
      <div >
        <Header />
        <div className='termAndCondition'>
          <div className='leftSide'></div>
          <div className='titleView'>
            <text className='TitleText'>General application usage. <br /> Last revised: January XXth, 20XX </text>
          </div>
        </div>
        <div class="termAndConditionContent">
          <div className='leftSide'></div>
          <div class="table-content">
            <div className='content-margin'>
              <text className='titleTableContent'>Table of Contents</text>
            </div>
            {
              list.map((item, index) => {
                return (
                  <div>
                    <a href={`#${index}`} >
                      <p className='listItem' style={index === this.state.count ? { color: 'red' } : { color: 'black' }} onClick={() => this.setState({ count: index })} >{`${item.num}. ${item.text}`}</p>
                    </a>
                  </div>
                )
              })
            }
          </div>
          <div class="content-view">
            {
              listContent.map((item, index) => {
                return (
                  <div>
                    <text id={index} className='listContent-title'>{item.title}</text>
                    <p className='listContent-text'>{item.content}</p>
                    <text className='listContent-title2'>{item.title2}</text>
                    <p className='listContent-text'>{item.content2}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='rightSide'></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default TermAndCondition;