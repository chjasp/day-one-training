GOOGLE_PROJECT_ID=bdaa-christoph-tbx-8xipac4i
CLOUD_RUN_SERVICE=dqr-be-api-service-backend1612
INSTANCE_CONNECTION_NAME=bdaa-christoph-tbx-8xipac4i:europe-west3:dqrsql

DB_USER=root
DB_PASS=dqradar357
DB_NAME=dqrdev

gcloud builds submit --tag eu.gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \
  --image eu.gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
  --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
  --update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASS=$DB_PASS,DB_USER=$DB_USER,DB_NAME=$DB_NAME \
  --platform managed \
  --region europe-west3 \
  --allow-unauthenticated \
  --project=$GOOGLE_PROJECT_ID