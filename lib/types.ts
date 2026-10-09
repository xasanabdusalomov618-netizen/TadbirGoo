export type Role = "customer" | "seller" | "admin";
export type PriceType = "per_hour" | "per_day" | "per_piece" | "per_event";
export type Lang = "uz" | "ru" | "en";
export type Theme = "light" | "dark";

export type BookingStatus =
  | "new"
  | "pending"
  | "confirmed"
  | "preparing"
  | "in_transit"
  | "installing"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface User {
  id: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  role: Role;
  lang: Lang;
  theme_preference: Theme;
  created_at: string;
}

export interface SellerProfile {
  id: string;
  user_id: string;
  business_name: string;
  description: string;
  location: string;
  phone: string;
  rating: number;
  reviews_count: number;
  is_approved: boolean;
  total_orders: number;
  created_at: string;
}

export interface Category {
  id: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  icon: string;
}

export interface Product {
  id: string;
  seller_id: string;
  category_id: string;
  title: string;
  description: string;
  price: number;
  price_type: PriceType;
  quantity: number;
  location: string;
  rating: number;
  reviews_count: number;
  is_active: boolean;
  created_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
}

export interface Availability {
  id: string;
  product_id: string;
  blocked_date: string;
}

export interface Booking {
  id: string;
  customer_id: string;
  event_date: string;
  event_type: string;
  location: string;
  event_address: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  delivery_type: string;
  subtotal: number;
  delivery_fee: number;
  installation_fee: number;
  total_price: number;
  status: BookingStatus;
  is_disputed: boolean;
  created_at: string;
}

export interface BookingItem {
  id: string;
  booking_id: string;
  product_id: string;
  quantity: number;
  price: number;
}

export interface Review {
  id: string;
  product_id: string;
  customer_id: string;
  booking_id?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Settings {
  commission_percent: number;
}

/* ---------- Joined / API view types ---------- */

export interface ProductWithRelations extends Product {
  seller_name: string;
  seller_rating: number;
  seller_approved: boolean;
  category_name: string;
  images: string[];
  blocked_dates: string[];
  reviews?: ReviewWithUser[];
}

export interface ReviewWithUser extends Review {
  customer_name: string;
}

export interface BookingWithRelations extends Booking {
  customer_name: string;
  items: (BookingItem & { product_title: string; product_image: string; seller_id: string })[];
}

export interface SellerStats {
  total_revenue: number;
  pending_revenue: number;
  commission_percent: number;
  commission_fee: number;
  net_earnings: number;
  total_orders: number;
  active_orders: number;
  completed_orders: number;
  total_products: number;
  average_rating: number;
  monthly: { label: string; revenue: number; orders: number }[];
}

export interface AdminStats {
  total_users: number;
  total_customers: number;
  total_sellers: number;
  pending_sellers: number;
  total_products: number;
  active_bookings: number;
  total_bookings: number;
  total_volume: number;
  platform_revenue: number;
  disputes: number;
  revenue_by_category: { label: string; value: number }[];
  monthly_revenue: { label: string; value: number }[];
  top_sellers: { name: string; revenue: number; orders: number }[];
}
