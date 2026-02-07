# 🚀 Shopify Multi-Store Dashboard

Complete dashboard to manage orders from 3 Shopify stores with 2 Shiprocket accounts.

## ✨ Features

- ✅ Auto-sync orders from 3 Shopify stores (daily at 6 AM)
- ✅ Auto-update order status (hourly)
- ✅ Inventory management with sidebar
- ✅ Smart SKU routing to 2 Shiprocket accounts
- ✅ Bulk shipping with priority-based sorting
- ✅ Real-time "Can Ship" status based on inventory
- ✅ Filter & search orders
- ✅ 100% FREE hosting (Vercel + Supabase)

---

## 🚀 Quick Deploy to Vercel

### Step 1: Fork this Repository
1. Click "Fork" button (top right)
2. Copy to your GitHub account

### Step 2: Deploy to Vercel
1. Go to: https://vercel.com
2. Click "New Project"
3. Import your forked repository
4. Add environment variables (see below)
5. Click "Deploy"

### Step 3: Environment Variables

Add these in Vercel → Settings → Environment Variables:

```env
# Supabase Database
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=your-anon-public-key

# Shopify Store 1
SHOPIFY_STORE_1_URL=store1.myshopify.com
SHOPIFY_STORE_1_TOKEN=shpat_xxxxx

# Shopify Store 2
SHOPIFY_STORE_2_URL=store2.myshopify.com
SHOPIFY_STORE_2_TOKEN=shpat_xxxxx

# Shopify Store 3
SHOPIFY_STORE_3_URL=store3.myshopify.com
SHOPIFY_STORE_3_TOKEN=shpat_xxxxx

# Shiprocket Account 1
SHIPROCKET_1_EMAIL=account1@email.com
SHIPROCKET_1_PASSWORD=password1

# Shiprocket Account 2
SHIPROCKET_2_EMAIL=account2@email.com
SHIPROCKET_2_PASSWORD=password2

# Admin Password (for dashboard login)
ADMIN_PASSWORD=your-secure-password
```

### Step 4: Setup Cron Jobs

In Vercel dashboard:
1. Go to Settings → Cron Jobs
2. Add these 2 jobs:

**Daily Order Sync:**
- Path: `/api/sync-orders`
- Schedule: `0 6 * * *` (6 AM daily)

**Hourly Status Update:**
- Path: `/api/sync-status`
- Schedule: `0 * * * *` (Every hour)

---

## 📋 Database Setup (Supabase)

1. Create account at: https://supabase.com
2. Create new project
3. Run the SQL from `VERCEL_SETUP_GUIDE.md`
4. Copy your Project URL and anon key

---

## 🎯 How to Use

### 1. Add Inventory
- Click "Inventory" button
- Fill in SKU, Product Name, Color, Size, Quantity
- Click "Add Stock"
- Orders with matching SKUs will automatically show "✅ Can Ship"

### 2. Upload SKU Lists (for Shiprocket routing)
- Create CSV file with SKUs for each account
- System will auto-route orders to correct Shiprocket account

### 3. Bulk Ship Orders
- Select multiple orders (checkbox)
- Click "Ship Selected"
- System automatically:
  - Routes to correct Shiprocket account
  - Sorts by priority (location, payment method)
  - Creates shipments in Shiprocket

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Create .env.local file with your environment variables

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## 📁 Project Structure

```
shopify-dashboard/
├── app/
│   ├── api/
│   │   ├── sync-orders/     # Daily order sync from Shopify
│   │   ├── sync-status/     # Hourly status updates
│   │   ├── orders/          # Fetch orders
│   │   ├── inventory/       # Manage inventory
│   │   └── ship-orders/     # Bulk shipping via Shiprocket
│   ├── page.tsx            # Main dashboard (Orders + Inventory sidebar)
│   └── globals.css         # Styles
├── lib/
│   └── supabase.ts         # Database client
└── package.json
```

---

## 💡 Tips

- Green highlighted orders = Can ship (stock available)
- Yellow highlighted = Waiting for stock
- Filter by status: Pending, Fulfilled, Paid
- Search by order number or customer name
- Sidebar stays open for quick inventory updates

---

## 🆘 Troubleshooting

**Orders not syncing?**
- Check Shopify API tokens in Vercel environment variables
- Trigger manual sync with "Sync Orders" button

**Cron jobs not working?**
- Verify they're added in Vercel Settings → Cron Jobs
- Check the exact paths: `/api/sync-orders` and `/api/sync-status`

**Can't ship orders?**
- Verify Shiprocket email/password in environment variables
- Check order has inventory in stock

---

## 📊 Cost

**$0/month** 🎉

- Vercel: FREE (Hobby plan)
- Supabase: FREE (500MB database)
- No credit card required!

---

## 🎯 Support

For issues or questions:
1. Check the setup guide: `VERCEL_SETUP_GUIDE.md`
2. Verify all environment variables
3. Check Vercel deployment logs

---

**Made with ❤️ for easy Shopify management**
