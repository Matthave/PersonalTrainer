import React, { Component } from 'react'
import $ from 'jquery';

class ArrowBtn extends Component {
    state = {
        opacityArrowBtn: 1,
        displayArrowBtn: ''
    }

    myRef = React.createRef();

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY < 10) {
            this.setState({
                opacityArrowBtn: 1,
            })
            setTimeout(() => {
                this.setState({
                    displayArrowBtn: 'block'
                })
            }, 400)
        } else if (window.scrollY > 10) {
            this.setState({
                opacityArrowBtn: 0,
            })
            setTimeout(() => {
                this.setState({
                    displayArrowBtn: 'none'
                })
            }, 400)

        }
    }

    //jQuery Here
    clickHandle() {
        const $sectionOne = $('.sectionOne').offset().top
        const $nameHeader = $('.myName').offset().top
        const $navHeight = $('nav').height()
        $("html").animate(
            {
                scrollTop: $nameHeader - ($(window).height() / 2)
            },
            1000
        )

        setTimeout(() => {
            $("html").animate(
                {
                    scrollTop: $sectionOne - $navHeight
                },
                1000
            )
        }, 2000)
    }

    //jQuery Here

    render() {
        return (
            <div
                className='arrowBtn'
                style={{ opacity: this.state.opacityArrowBtn, display: this.state.displayArrowBtn }}
                onClick={this.clickHandle.bind(this)}
            >
                <i className="fas fa-chevron-down one"></i>
                <i className="fas fa-chevron-down two"></i>
                <i className="fas fa-chevron-down three"></i>
            </div>
        )
    }
}

export default ArrowBtn