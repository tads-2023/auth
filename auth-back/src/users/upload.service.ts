import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class UploadService {
  s3 = new S3({
    accessKeyId: 'AKIAQVFOR57IB77HKME3',
    secretAccessKey: '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',
  });

  async uploadFile(file) {
    const { originalname } = file;

    return await this.s3Upload(
      file.buffer,
      "ucdb-auth-diogo",
      originalname,
      file.mimetype,
    );
  }

  async s3Upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ContentType: mimetype,
      ContentDisposition: 'inline',
      CreateBucketConfiguration: {
        LocationConstraint: 'us-east-1',
      },
    };

    try {
      let s3Response = await this.s3.upload(params).promise();
      console.log(s3Response.Location);
      return s3Response.Location;
    } catch (e) {
      console.log(e);
    }
  }
}
