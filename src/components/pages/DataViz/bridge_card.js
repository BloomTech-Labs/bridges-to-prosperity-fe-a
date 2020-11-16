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
      <Card className="detailsContainer-card">
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
                <span id="bridge_name_intro"> Site:</span> {detailsData.name}
              </strong>
            </Typography>
            <div className="bridgeImgDiv-container">
              <div className="bridge-image">
                {/* {detailsData.bridge_image ? (
                  // <CardMedia
                  //   id="card_media"
                  //   className={classes.media}
                  //   title="bridge_image"
                  //   image={detailsData.bridge_image}
                  // />
                  <img src={detailsData.bridge_image} />
                ) : (
                  <div></div>
                )} */}
              </div>
              {/* <div className="graphDiv">
                <RenderGraph data={detailsData} />
                <p>Crossing Deaths (within the past three years): {detailsData.crossing_deaths ? detailsData.crossing_deaths : 0}</p>
                <p>Crossing Injuries (within the past three years): {detailsData.crossing_injuries ? detailsData.crossing_injuries : 0}</p>
                <p>Crossing Incident Description: {detailsData.crossing_incident_desc ? detailsData.crossing_incident_desc : `No available records`}</p>
              </div> */}
            </div>
          </CardContent>
        </CardActionArea>

        <CardContent>
          <Typography paragraph>
            <div className="bottom_info">
              <div className="bottom_info_projectInfo">
                <p>
                  <span className="bottomInfoTags">Project Code:</span>{' '}
                  {detailsData.project_code
                    ? detailsData.project_code
                    : 'Content unavailable'}
                </p>
                <p>
                  <span className="bottomInfoTags">Project Stage:</span>{' '}
                  {detailsData.stage
                    ? detailsData.stage
                    : 'Content unavailable'}
                </p>
              </div>
              <hr />
              <div className="bottom_info_cols">
                <div className="bottom_info_cols_social">
                  <h1>Social Information</h1>
                  <p>
                    <span className="bottomInfoTags">
                      Individuals Directly Served:
                    </span>{' '}
                    {detailsData.individuals_directly_served
                      ? detailsData.individuals_directly_served
                      : 'Content unavailable'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">
                      Crossing Deaths within that past 3 years:
                    </span>{' '}
                    {detailsData.crossing_deaths
                      ? detailsData.crossing_deaths
                      : 0}
                  </p>
                  <p>
                    <span className="bottomInfoTags">
                      Crossing Injuries within the past 3 years:
                    </span>{' '}
                    {detailsData.crossing_injuries
                      ? detailsData.crossing_injuries
                      : 0}
                  </p>
                  <p>
                    <span className="bottomInfoTags">
                      Crossing Incident Description:
                    </span>{' '}
                    {detailsData.crossing_incident_desc
                      ? detailsData.crossing_incident_desc
                      : `No available records`}
                  </p>
                </div>
                <hr />
                <div className="bottom_info_cols_loca">
                  <h1>Location Information</h1>
                  <p>
                    <span className="bottomInfoTags">Province:</span>{' '}
                    {detailsData.province
                      ? detailsData.province
                      : 'Content unavailable'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">District:</span>{' '}
                    {detailsData.district
                      ? detailsData.district
                      : 'Content unavailable'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">Closest City:</span>{' '}
                    {detailsData.nearest_city
                      ? detailsData.nearest_city
                      : 'Content unavailable'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">
                      Distance to Closest Hospital:
                    </span>{' '}
                    {detailsData.distance_from_hospital
                      ? detailsData.distance_from_hospital
                      : 'Content unavailable'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">Land Owned by:</span>{' '}
                    {detailsData.land_ownership
                      ? detailsData.land_ownership
                      : 'Unknown'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">
                      Permission from Land Ownser:
                    </span>{' '}
                    {detailsData.land_ownership_permission
                      ? detailsData.land_ownership_permission
                      : 'Unknown'}
                  </p>
                  <p>
                    <span className="bottomInfoTags">Local Recorded Data:</span>{' '}
                    {detailsData.social_info
                      ? detailsData.social_info
                      : 'Content unavailable'}
                  </p>
                </div>
                <hr />
                <div className="bottom_info_cols_bridge">
                  <h1>Additional Bridge Information</h1>
                  <p>
                    {detailsData.type ? (
                      <span>
                        <span className="bottomInfoTags">Type of Bridge: </span>
                        {detailsData.type}
                      </span>
                    ) : null}
                  </p>
                  <p>
                    {detailsData.span ? (
                      <span>
                        <span className="bottomInfoTags">Bridge Span: </span>
                        {detailsData.span}
                      </span>
                    ) : null}
                  </p>
                  <p>
                    {detailsData.stage == 'Rejected' ? (
                      <span>
                        <span className="bottomInfoTags">
                          Reason for Rejection:{' '}
                        </span>
                        {detailsData.rejected_comments}
                      </span>
                    ) : (
                      <div></div>
                    )}
                  </p>
                  <p>
                    <span className="bottomInfoTags">Bridge requested by:</span>{' '}
                    {detailsData.form_requested_by
                      ? detailsData.form_requested_by
                      : 'Content unavailable'}
                  </p>
                </div>
              </div>
              {/* <div className="bottom_info_cols">
              </div> */}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BridgeCard;
