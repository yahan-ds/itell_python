// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Chapter = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Chapter'
  /** The title of the Section */
  title: string
  /** MDX file body */
  body: MDX
  url: string
  location: json
  headings: json
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Chapter
export type DocumentTypeNames = 'Chapter'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allChapters: Chapter[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Chapter: Chapter
}

export type NestedTypeMap = {

}

 