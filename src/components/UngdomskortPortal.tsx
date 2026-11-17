"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Bell,
  Globe,
  Plus,
  Download,
  CreditCard,
  Calendar as CalendarIcon,
  PhoneCall,
  Clock,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  User,
  Smartphone,
  AlertCircle
} from "lucide-react";

export default function UngdomskortPortal() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "calendar" | "messages" | "profile">("dashboard");
  const [calMonth, setCalMonth] = useState<number>(9); // October
  const [calYear, setCalYear] = useState<number>(2024);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePrevMonth = () => {
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear(calYear - 1);
    } else {
      setCalMonth(calMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear(calYear + 1);
    } else {
      setCalMonth(calMonth + 1);
    }
  };

  return (
    <section className="space-y-6 rounded-3xl border border-border/70 bg-white dark:bg-surface p-6 sm:p-10 text-foreground overflow-hidden">
      {/* Top Banner Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-5">
        <div className="space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <Smartphone className="h-4 w-4" /> Live Interactive Application Prototype
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Ungdomskort Redesigned Web Portal
          </h2>
          <p className="text-sm text-foreground/80">
            Explore the live, working student transport dashboard, calendar, message center, and student profile below.
          </p>
        </div>
      </div>

      {/* App Shell */}
      <div className="rounded-2xl border border-border/70 bg-background overflow-hidden font-sans">
        {/* Header Nav */}
        <header className="sticky top-0 z-20 border-b border-border/70 bg-white/95 dark:bg-surface/95 backdrop-blur-md px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Logo directly using ung-logodisplay.svg */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
            aria-label="Ungdomskort Dashboard"
          >
            <Image
              src="/assets/ung-logodisplay.svg"
              alt="Ungdomskort Logo"
              width={140}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </button>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:order-3">
            <button
              onClick={() => triggerToast("You have 1 new pass alert.")}
              className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-fg hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button
              onClick={() => triggerToast("Language toggled: Danish / English.")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 text-muted-fg hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Language settings"
            >
              <Globe className="h-4 w-4" />
            </button>
            <button
              onClick={() => triggerToast("Log out simulator action.")}
              className="hidden sm:inline-flex rounded-full border border-border/70 px-3.5 py-1 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Log out
            </button>
          </div>

          {/* Navigation Pills */}
          <nav className="w-full sm:w-auto sm:order-2 flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "dashboard"
                  ? "bg-blue-600 text-white"
                  : "text-muted-fg hover:bg-muted hover:text-foreground"
              }`}
            >
              Your Youth Card
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`shrink-0 relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "messages"
                  ? "bg-blue-600 text-white"
                  : "text-muted-fg hover:bg-muted hover:text-foreground"
              }`}
            >
              <span>Messages</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "profile"
                  ? "bg-blue-600 text-white"
                  : "text-muted-fg hover:bg-muted hover:text-foreground"
              }`}
            >
              Profile
            </button>
          </nav>
        </header>

        {/* Tab 1: Dashboard */}
        {activeTab === "dashboard" && (
          <div className="p-5 sm:p-8 space-y-8">
            {/* Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Active Membership
                </div>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-foreground">
                  Welcome to your <br />
                  <span className="text-blue-600 dark:text-blue-400">Youth Card</span> portal
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Commuting made simple. Manage your subscriptions, track your active periods, and explore new benefits.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 dark:bg-blue-500 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add New Period</span>
                  </button>
                  <button
                    onClick={() => triggerToast("Downloading PDF invoice...")}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white dark:bg-surface px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Invoice</span>
                  </button>
                </div>
              </div>

              {/* KPI Stat Cards */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg">Total Spent</span>
                    <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="font-sans text-xl font-bold text-foreground tabular-nums">DKK 4,043</p>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">-12% savings</span>
                </div>

                <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg">Active Periods</span>
                    <CalendarIcon className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="font-sans text-xl font-bold text-foreground tabular-nums">6</p>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">Current</span>
                </div>

                <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg">Dispatched</span>
                    <PhoneCall className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="font-sans text-xl font-bold text-foreground tabular-nums">1</p>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">Ready</span>
                </div>

                <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-fg">Pending</span>
                    <Clock className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="font-sans text-xl font-bold text-foreground tabular-nums">5</p>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">Processing</span>
                </div>
              </div>
            </div>

            {/* Active Subscription Periods Cards */}
            <div className="space-y-4 pt-6 border-t border-border/70">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-base font-bold text-foreground">Your Active Subscription Periods</h4>
                  <p className="text-xs text-muted-fg mt-0.5">Each card below represents a subscription period with key validity dates.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Period #6 */}
                <div className="rounded-2xl border border-green-500/40 bg-white dark:bg-surface overflow-hidden">
                  <div className="bg-green-600 px-4 py-2.5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5" /> Dispatched
                    </span>
                    <span>Period #6</span>
                  </div>
                  <div className="p-4 text-xs space-y-2 tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-semibold text-foreground">01-04-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">20-04-2024</span>
                    </div>
                  </div>
                </div>

                {/* Period #5 */}
                <div className="rounded-2xl border border-blue-500/40 bg-white dark:bg-surface overflow-hidden">
                  <div className="bg-blue-600 px-4 py-2.5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Ordered
                    </span>
                    <span>Period #5</span>
                  </div>
                  <div className="p-4 text-xs space-y-2 tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-semibold text-foreground">03-04-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">14-10-2024</span>
                    </div>
                  </div>
                </div>

                {/* Period #4 */}
                <div className="rounded-2xl border border-blue-500/40 bg-white dark:bg-surface overflow-hidden">
                  <div className="bg-blue-600 px-4 py-2.5 flex items-center justify-between text-white text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Ordered
                    </span>
                    <span>Period #4</span>
                  </div>
                  <div className="p-4 text-xs space-y-2 tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-semibold text-foreground">10-10-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-semibold text-red-600 dark:text-red-400">15-11-2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Calendar */}
        {activeTab === "calendar" && (
          <div className="p-5 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-sans text-xl font-bold text-foreground">Your Subscription Calendar</h3>
                <p className="text-xs text-muted-fg mt-0.5">Interactive overview of active, ordered, and pending pass coverage dates.</p>
              </div>
              <button
                onClick={() => triggerToast("New period creation flow opened.")}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 dark:bg-blue-500 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-3.5 w-3.5" /> Add New Period
              </button>
            </div>

            {/* Calendar Controls */}
            <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrevMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 hover:bg-muted transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-sans text-base font-bold text-foreground min-w-[140px] text-center">
                  {months[calMonth]} {calYear}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border/70 hover:bg-muted transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wider font-semibold text-muted-fg border-b border-border/60 pb-2">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>

              {/* Calendar Grid Demo */}
              <div className="grid grid-cols-7 gap-1.5 text-xs text-center tabular-nums">
                {Array.from({ length: 31 }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isActivePeriod = dayNum >= 1 && dayNum <= 10;
                  const isOrderedPeriod = dayNum >= 14 && dayNum <= 22;
                  const isPendingPeriod = dayNum >= 25 && dayNum <= 28;

                  return (
                    <div
                      key={dayNum}
                      className={`min-h-[52px] p-1.5 rounded-xl border flex flex-col justify-between items-center text-[11px] ${
                        isActivePeriod
                          ? "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-300 font-semibold"
                          : isOrderedPeriod
                          ? "bg-blue-500/10 border-blue-500/40 text-blue-700 dark:text-blue-300 font-semibold"
                          : isPendingPeriod
                          ? "bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-300 font-semibold"
                          : "border-border/50 text-foreground"
                      }`}
                    >
                      <span className="self-start">{dayNum}</span>
                      {isActivePeriod && <span className="text-[9px] uppercase tracking-wider text-green-600 dark:text-green-400">Active</span>}
                      {isOrderedPeriod && <span className="text-[9px] uppercase tracking-wider text-blue-600 dark:text-blue-400">Ordered</span>}
                      {isPendingPeriod && <span className="text-[9px] uppercase tracking-wider text-amber-600 dark:text-amber-400">Pending</span>}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-5 text-xs pt-3 border-t border-border/60">
                <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" /> Active
                </span>
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-600" /> Ordered
                </span>
                <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 font-semibold">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500" /> Pending
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Messages */}
        {activeTab === "messages" && (
          <div className="p-5 sm:p-8 space-y-4">
            <h3 className="font-sans text-xl font-bold text-foreground">Messages &amp; Notifications</h3>

            <div className="space-y-3">
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 flex items-start gap-3.5 hover:border-blue-600/50 transition-colors">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-semibold">Ungdomskort Transport Authority</strong>
                    <span className="text-muted-fg text-[11px]">2 days ago</span>
                  </div>
                  <p className="font-semibold text-foreground text-sm">Your period #8 has been dispatched and is ready to use</p>
                  <p className="text-muted-fg text-xs leading-relaxed">Your active subscription period from 01-04-2024 to 10-04-2024 is now active on your physical &amp; digital card.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 flex items-start gap-3.5 hover:border-blue-600/50 transition-colors">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-semibold">Payment Confirmed</strong>
                    <span className="text-muted-fg text-[11px]">5 days ago</span>
                  </div>
                  <p className="font-semibold text-foreground text-sm">DKK 384,00 payment for period #7 confirmed</p>
                  <p className="text-muted-fg text-xs leading-relaxed">Your Danish MobilePay transaction was processed successfully.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 flex items-start gap-3.5 hover:border-blue-600/50 transition-colors">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1 text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-semibold">Renewal Reminder</strong>
                    <span className="text-muted-fg text-[11px]">1 week ago</span>
                  </div>
                  <p className="font-semibold text-foreground text-sm">Period #5 expires in 14 days (renew now)</p>
                  <p className="text-muted-fg text-xs leading-relaxed">Your current period ends 13-11-2024. Add a new period to avoid any gap in travel coverage.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Profile */}
        {activeTab === "profile" && (
          <div className="p-5 sm:p-8 space-y-6">
            <h3 className="font-sans text-xl font-bold text-foreground">Personal Profile</h3>

            <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <User className="h-7 w-7" />
              </div>
              <div>
                <h4 className="font-sans text-lg font-bold text-foreground">Fernando Alonso</h4>
                <p className="text-xs text-muted-fg">SDU Student, Odense, Denmark</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">CPR Number</span>
                <p className="font-semibold text-foreground text-sm tabular-nums">******-****</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">Email</span>
                <p className="font-semibold text-foreground text-sm">f.alonso@student.sdu.dk</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">Address</span>
                <p className="font-semibold text-foreground text-sm">Campusvej 55, 5230 Odense M</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">Institution</span>
                <p className="font-semibold text-foreground text-sm">Syddansk Universitet (SDU)</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">Card Number</span>
                <p className="font-semibold text-foreground text-sm tabular-nums">**** **** **** 0981</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-white dark:bg-surface p-4 space-y-1">
                <span className="text-[11px] text-muted-fg uppercase tracking-wider font-semibold">Commute Route</span>
                <p className="font-semibold text-foreground text-sm">Odense to Kolding (Zones 40-70)</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-2xl border border-blue-600/30 bg-white dark:bg-surface px-4 py-3 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-lg">
          {toastMessage}
        </div>
      )}
    </section>
  );
}
