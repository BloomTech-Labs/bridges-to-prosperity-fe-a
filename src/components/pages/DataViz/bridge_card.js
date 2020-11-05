import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BridgesContext } from '../../../state/bridgesContext';
import RenderGraph from './Graphs/RenderGraph';
import CancelIcon from '@material-ui/icons/Cancel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const BridgeCard = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  const [closeBtn, setCloseBtn] = React.useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="detailsContainer">
      <Card className={detailsData.root}>
        <CardActionArea>
          <div className="closeArea">
            <div
              className="close_button"
              onClick={() => setDetailsData(null)}
              onMouseOver={() => setCloseBtn(true)}
              onMouseOut={() => setCloseBtn(false)}
            >
              {closeBtn == true ? (
                <HighlightOffIcon size="large" />
              ) : (
                <CancelIcon fontsize="large" />
              )}
            </div>
          </div>
          <CardContent id="card_content">
            <Typography
              id="bridge_name_text"
              gutterBottom
              style={{ color: 'white' }}
              color="inherit"
              variant="h5"
              component="h2"
              width="100%"
            >
              <strong>
                {' '}
                <span id="bridge_name_intro"> Site:</span>{' '}
                {detailsData.bridge_site_name}
              </strong>
            </Typography>
            <div className="bridgeImgDiv-container">
              <div className="bridge-image">
                {detailsData.bridge_image ? (
                  <CardMedia
                    id="card_media"
                    className={classes.media}
                    title="bridge_image"
                    image={detailsData.bridge_image}
                  />
                ) : (
                  <div></div>
                )}
              </div>
              <div className="graphDiv">
                <RenderGraph data={detailsData} />
              </div>
            </div>
          </CardContent>
        </CardActionArea>

        <CardContent>
          <Typography paragraph>
            <div className="bottom_info">
              <div className="bottom_info_cols">
                <p>
                  <span className="bottomInfoTags">Province:</span>{' '}
                  {detailsData.province}
                </p>
                <p>
                  <span className="bottomInfoTags">District:</span>{' '}
                  {detailsData.district}
                </p>
                <p>
                  <span className="bottomInfoTags">Project Sub Stage:</span>{' '}
                  {detailsData.sub_stage}
                </p>
                <p>
                  <span className="bottomInfoTags">Project Stage:</span>{' '}
                  {detailsData.project_stage}
                </p>
              </div>
              <div className="bottom_info_cols">
                <p>
                  <span className="bottomInfoTags">Economic Impact (RWF):</span>{' '}
                  {detailsData.inc_income_rwf}
                </p>
                <p>
                  <span className="bottomInfoTags">Economic Impact (USD):</span>{' '}
                  {detailsData.inc_income_usd}
                </p>
              </div>
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BridgeCard;
