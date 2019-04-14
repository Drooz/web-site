import React, {  } from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline'

const timeline = props => (
 
        <div>
          <header><link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet"></link></header>
          <h2>timeline</h2>
          <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon={<i class="fas fa-envelope-open-text"></i>
                          }
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i class="fas fa-envelope-open-text"></i>              }
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
      </Timeline>,
        </div>
)
export default timeline;