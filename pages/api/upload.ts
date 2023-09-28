import type { NextApiRequest, NextApiResponse } from "next";
import S3 from 'aws-sdk/clients/s3'
import { randomUUID } from "crypto";
type Data = {
}
const s3 = new S3({
  apiVersion: '2006-03-01',
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_ACCESS_KEY_ID || '',
  },
  signatureVersion: 'v4'
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ex = (req.query.fileName as string).split('/')[1]
  const Key = `${randomUUID()}.${ex}`
  const s3Params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key,
    Expires: 60,
    ContentType: `application/${ex}`
  }
  const uploadUrl = await s3.getSignedUrl('putObject', s3Params)
  console.log(uploadUrl, 'uploadurl')
  res.status(200).json({
    result: true,
    url: uploadUrl,
    key: Key
  })
}