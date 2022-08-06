import { Connection, Model, Schema, SchemaTypes } from 'mongoose';

interface ShortLink extends Document {
  readonly shortId: string;
  readonly url: string;
  readonly createdAt: Date;
}

type ShortLinkModel = Model<ShortLink>;

const ShortLinkSchema = new Schema<ShortLink>(
  {
    shortId: SchemaTypes.String,
    url: SchemaTypes.String,
    createdAt: SchemaTypes.Date,
  },
  { timestamps: true },
);

const createShortLinkModel: (conn: Connection) => ShortLinkModel = (
  conn: Connection,
) => conn.model<ShortLink>('ShortLink', ShortLinkSchema, 'shortLink');

export { ShortLinkModel, ShortLink, createShortLinkModel };
