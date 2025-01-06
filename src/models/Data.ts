import mongoose, { Schema } from "mongoose";

// Define substructures
interface Url {
    raw: string;
    host: string[];
    port: string;
    path: string[];
    variable?: { key: string; value: string }[];
  }
  
  interface Header {
    key: string;
    value: string;
    type: string;
  }
  
  interface RequestBody {
    mode: string;
    raw: string;
    options?: { raw: { language: string } };
  }
  
  interface Request {
    method: string;
    header?: Header[];
    body?: RequestBody;
    url: Url;
  }
  
  interface Item {
    name: string;
    request?: Request;
    response: any[];
    item?: Item[]; // Nested items for subfolders
  }
  
  export interface CollectionInfo {
    _postman_id: string;
    name: string;
    schema: string;
    _exporter_id: string;
  }
  
  export interface Collection extends Document {
    info: CollectionInfo;
    item: Item[];
  }

  // Define schemas for substructures
const UrlSchema = new Schema({
    raw: { type: String, required: true },
    host: [{ type: String, required: true }],
    port: { type: String, required: true },
    path: [{ type: String, required: true }],
    variable: [
      {
        key: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
  });
  
  const HeaderSchema = new Schema({
    key: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true },
  });
  
  const RequestBodySchema = new Schema({
    mode: { type: String, required: true },
    raw: { type: String, required: true },
    options: {
      raw: {
        language: { type: String },
      },
    },
  });
  
  const RequestSchema = new Schema({
    method: { type: String, required: true },
    header: [HeaderSchema],
    body: RequestBodySchema,
    url: UrlSchema,
  });
  
  const ItemSchema = new Schema({
    name: { type: String, required: true },
    request: RequestSchema,
    response: { type: Array, default: [] },
    item: [this], // Recursive definition for nested items
  });
  
  const CollectionInfoSchema = new Schema({
    _postman_id: { type: String, required: true },
    name: { type: String, required: true },
    schema: { type: String, required: true },
    _exporter_id: { type: String, required: true },
  });
  
  // Define main schema
  const CollectionSchema = new Schema({
    info: { type: CollectionInfoSchema, required: true },
    item: { type: [ItemSchema], required: true },
  });
  
  // Create the mongoose model
  const CollectionModel = mongoose.model<Collection>("Collection", CollectionSchema);
  
  export default CollectionModel;
  