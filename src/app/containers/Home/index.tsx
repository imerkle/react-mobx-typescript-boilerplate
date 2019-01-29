import * as React from "react";
import Slider from "react-slick";
import cx from 'classnames';
import {Typography} from '@material-ui/core';
import {changelog} from 'app/constants';

import { withNamespaces, Trans } from 'react-i18next';
import styles from './style';
import * as stylesg from 'app/style.css';
import { withStyles } from '@material-ui/styles';

@(withStyles as any)(styles)
@(withNamespaces as any)("home")
class Home extends React.Component<any, any> {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        };
        const {classes} = this.props;
        return (
          <>
            <Slider {...settings}>
              <SliderImage classes={classes} url="https://occ-0-2704-2186.1.nflxso.net/art/f90c7/057fa9bd0fc04ccea809baaffca34fb3457f90c7.jpg" title="Hero Loreum of Ipsom"/>
              <SliderImage classes={classes} url="https://assets.kucoin.com/web/pc/static/box3_en.93f2f3a1.png"/>
            </Slider>

            <div className={cx(stylesg.mar_20)}>
              <Typography className={cx(stylesg.h4)} variant="h4"><Trans>Changelog</Trans></Typography>
              {changelog.map((o, i)=>{
                return (
                    <div key={i}>
                    <Typography className={cx(stylesg.h5)} variant="h5">{o.title}</Typography>
                      <ul>
                        {o.captions.map((ox, ix)=>{
                          return (
                            <li key={ix}><Typography className={cx(stylesg.caption)} variant="caption">{ox}</Typography></li>
                            )
                        })}
                      </ul>                      
                    </div>
                  )
                
              })}
            </div>
          </>
        );
    }
}
const SliderImage  = (props) => {
  const { url, title, classes} = props;
  return (
    <div className={cx(classes.cover)} style={{backgroundImage: `url(${url})`}}>  
      <div className={cx(classes.bottomTitle)}>{title}</div>
      <div className={cx(classes.bottomShadow)}></div>
    </div>
  )
}
export default Home;
