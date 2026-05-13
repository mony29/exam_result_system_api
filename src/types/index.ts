import type { RequestHandler } from "express";

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type Handlers = Partial<Record<HttpMethod, RequestHandler | RequestHandler[]>>;

export type PathDetail = [
  string,
  RequestHandler[],
  Handlers,
  Record<string, PathDetail>?
];

export type Route = Record<string, PathDetail>;