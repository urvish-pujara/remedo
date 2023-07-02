import React from 'react';
import { AboutUsDenticare, AboutUsDenticareProps } from './about-us-denticare';
import { ComponentState } from '@remedoclinitech/staging.atoms.text-component.text';
import { denticareTheme } from '@remedoclinitech/staging.common.theme';
import { ThemeProvider } from '@mui/material';

export const BasicAboutUsDenticare = () => {
  // return (
  //   <AboutUsDenticare>hello world!</AboutUsDenticare>
  // );
  const sectionProps: AboutUsDenticareProps = {
    component: {
      id: 'test',
      orgId: 'test',
      component: '@remedoclinitech/staging.sections.about-us.about-us-denticare',
      version: '0.1',
      variant: 'Basic',
    },
    data: {
      "fieldName": "about-us-denticare",
      "type": "normal",
      "category": "static",
      "p": {
        "styles": {

        }
      },
      "cMap": {
        "@remedoclinitech/staging.atoms.text-component.text": [
          {
            "component": {
              "id": "de2b52a9-2c4c-4576-bb17-1e52442f4dd3",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.heading",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "For Patients",
                "state": ComponentState.Normal,
                "variant": "subtitle1",
                "style": {

                  "color": "#0084FF"
                }
              }
            }
          },
          {
            "component": {
              "id": "9ee24218-9ff3-4ea0-a7d2-d6dc83b77ea7",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.sub.heading1",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "Accepting New Patients",
                "state": ComponentState.Normal,
                "variant": "h2",
                "mt": 2,
                "style": {
                  "color": "#03254C"
                }
              }
            }
          },
          {
            "component": {
              "id": "25e7a17a-c979-4cb3-bae5-aa17eddaf848",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.sub.heading2",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "",
                "state": ComponentState.Normal,
                "variant": "h2",
                "mt": 2,
                "mb": 4,
                "fontWeight": 400,
                "style": {
                  "color": "#03254C"
                }
              }
            }
          },
          {
            "component": {
              "id": "9c950cf4-8dca-4d63-9872-5cc3e73733e6",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.description1",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "If you haven’t been to a dentist in a long while, please don’t fear. You’ve made an important decision – no need to feel guilty! Once your entire exam is completed, Dr. Singh will talk with you about his findings. Together you can create a healthy, effective treatment plan that best meets your dental and personal requirements. We can prioritize and stagger your treatments to give you the smile you need in a timeframe you can afford. Need Dental Emergency? We are here to help you; our dentists are able to see you as soon as possible. Pick up the phone and reach out to Dr. Aaron paul and his team here in Holbrook & Brockton for an unanticipated dental emergency (781) 767-1400,\nwe accept all major insurances. For any query related to insurance call or text us at  (781) 767-1400",
                "state": ComponentState.Normal,
                "variant": "description",
                "mt": 2,
                "style": {
                  "color": "#747474",
                  "textAlign": "justify",
                  "textJustify": "inter-word"
                }
              }
            }
          },
          {
            "component": {
              "id": "583a7467-5434-4258-a343-09f6c5fd34fc",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.description2",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "",
                "state": ComponentState.Normal,
                "variant": "body1",
                "mt": 4,
                "style": {
                  "color": "#747474"
                }
              }
            }
          },
          {
            "component": {
              "id": "a8d485ac-7b8f-48c3-85ee-b0e0bb2701c0",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.author",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "",
                "state": ComponentState.Normal,
                "variant": "subtitle2",
                "mt": 2,
                "style": {
                  "color": "#03254C"
                }
              }
            }
          },
          {
            "component": {
              "id": "8f789b95-ebc6-4f24-b374-6d47a0de5653",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.text-component.text",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.text.speclty",
              "type": "normal",
              "category": "static",
              "p": {
                "text": "",
                "state": ComponentState.Normal,
                "variant": "subtitle2",
                "fontWeight": 400,
                "style": {
                  "color": "#353535"
                }
              }
            }
          }
        ],
        "@remedoclinitech/staging.atoms.image-component.image": [
          {
            "component": {
              "id": "628bd7ea-3024-4fff-92be-3afbf2ec294c",
              "orgId": "57478c51-9968-498d-8659-699b5e6ce434",
              "component": "@remedoclinitech/staging.atoms.image-component.image",
              "version": "0.1",
              "variant": "Basic"
            },
            "data": {
              "fieldName": "about-us-denticare.image",
              "type": "normal",
              "category": "static",
              "p": {
                "src": "https://d3t5ai5vcxyqte.cloudfront.net/media/rpvfocub.png?updated_at=2023-04-06T08:18:47.795Z",
                "state": ComponentState.Normal,
                "className": "animate",
                "alt": "Sunflower",
                "style": {
                  "width": "100%"
                }
              }
            }
          }
        ]
      }
    }
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter"
        rel="stylesheet" />
      <ThemeProvider theme={denticareTheme}>
        <AboutUsDenticare
          {...sectionProps}
        />
      </ThemeProvider>
    </>
  );
}
