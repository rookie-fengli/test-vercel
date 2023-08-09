export interface IndexTitle {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ActionResultType<T> {
  code: number;
  message: string;
  data: T;
}

export interface EssayType {
  classify_id: number;
  essay_id: string;
  essay_name: string;
  essay_summary: string;
  essay_content: string;
  essay_create_time: string;
  last_modify_time: string;
  essay_file: string;
  essay_status: number;
  essay_praise_number: number;
  essay_look_over_number: number;
  essay_is_copy: number;
  tag_id: string;
  font_number: number;
  tag_name: string;
}

export interface ClassifyType {
  classify_id: number;
  classify_name: string;
  classify_summary: string;
  superior_id: number;
  is_enable: number;
}

export interface TagType {
  tag_id: number;
  tag_name: string;
  tag_status: number;
}
