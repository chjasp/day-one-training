GOOGLE_PROJECT_ID=bdaa-christoph-tbx-8xipac4i
CLOUD_RUN_SERVICE=dqrfe_445

gcloud builds submit --tag eu.gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --project=$GOOGLE_PROJECT_ID
