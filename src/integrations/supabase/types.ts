export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contest_participants: {
        Row: {
          contest_id: string | null
          created_at: string | null
          finish_time: string | null
          id: string
          rank: number | null
          score: number | null
          user_id: string | null
        }
        Insert: {
          contest_id?: string | null
          created_at?: string | null
          finish_time?: string | null
          id?: string
          rank?: number | null
          score?: number | null
          user_id?: string | null
        }
        Update: {
          contest_id?: string | null
          created_at?: string | null
          finish_time?: string | null
          id?: string
          rank?: number | null
          score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contest_participants_contest_id_fkey"
            columns: ["contest_id"]
            isOneToOne: false
            referencedRelation: "contests"
            referencedColumns: ["id"]
          },
        ]
      }
      contests: {
        Row: {
          created_at: string | null
          duration_minutes: number
          id: string
          participants: number | null
          problems: number[] | null
          start_time: string
          status: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          duration_minutes?: number
          id?: string
          participants?: number | null
          problems?: number[] | null
          start_time: string
          status?: string
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          duration_minutes?: number
          id?: string
          participants?: number | null
          problems?: number[] | null
          start_time?: string
          status?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      discussion_replies: {
        Row: {
          content: string
          created_at: string | null
          discussion_id: string | null
          id: string
          likes: number | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          discussion_id?: string | null
          id?: string
          likes?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          discussion_id?: string | null
          id?: string
          likes?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discussion_replies_discussion_id_fkey"
            columns: ["discussion_id"]
            isOneToOne: false
            referencedRelation: "discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      discussions: {
        Row: {
          content: string
          created_at: string | null
          id: string
          is_pinned: boolean | null
          likes: number | null
          problem_id: number | null
          replies: number | null
          tags: string[] | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          likes?: number | null
          problem_id?: number | null
          replies?: number | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          is_pinned?: boolean | null
          likes?: number | null
          problem_id?: number | null
          replies?: number | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "discussions_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
      problems: {
        Row: {
          acceptance_rate: number | null
          companies: string[] | null
          constraints: string | null
          created_at: string | null
          description: string
          difficulty: string
          examples: Json | null
          frequency: number | null
          id: number
          is_premium: boolean | null
          slug: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          acceptance_rate?: number | null
          companies?: string[] | null
          constraints?: string | null
          created_at?: string | null
          description: string
          difficulty: string
          examples?: Json | null
          frequency?: number | null
          id?: number
          is_premium?: boolean | null
          slug: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          acceptance_rate?: number | null
          companies?: string[] | null
          constraints?: string | null
          created_at?: string | null
          description?: string
          difficulty?: string
          examples?: Json | null
          frequency?: number | null
          id?: number
          is_premium?: boolean | null
          slug?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          contest_rating: number | null
          contests_attended: number | null
          created_at: string | null
          easy_solved: number | null
          email: string | null
          full_name: string | null
          global_ranking: number | null
          hard_solved: number | null
          id: string
          medium_solved: number | null
          problems_solved: number | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          contest_rating?: number | null
          contests_attended?: number | null
          created_at?: string | null
          easy_solved?: number | null
          email?: string | null
          full_name?: string | null
          global_ranking?: number | null
          hard_solved?: number | null
          id: string
          medium_solved?: number | null
          problems_solved?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          contest_rating?: number | null
          contests_attended?: number | null
          created_at?: string | null
          easy_solved?: number | null
          email?: string | null
          full_name?: string | null
          global_ranking?: number | null
          hard_solved?: number | null
          id?: string
          medium_solved?: number | null
          problems_solved?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      submissions: {
        Row: {
          code: string
          id: string
          language: string
          memory_usage: number | null
          problem_id: number | null
          runtime: number | null
          status: string
          submitted_at: string | null
          test_cases_passed: number | null
          total_test_cases: number | null
          user_id: string | null
        }
        Insert: {
          code: string
          id?: string
          language: string
          memory_usage?: number | null
          problem_id?: number | null
          runtime?: number | null
          status: string
          submitted_at?: string | null
          test_cases_passed?: number | null
          total_test_cases?: number | null
          user_id?: string | null
        }
        Update: {
          code?: string
          id?: string
          language?: string
          memory_usage?: number | null
          problem_id?: number | null
          runtime?: number | null
          status?: string
          submitted_at?: string | null
          test_cases_passed?: number | null
          total_test_cases?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
