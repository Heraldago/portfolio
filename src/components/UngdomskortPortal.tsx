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
  Sparkles,
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
    <section className="space-y-6 rounded-2xl sm:rounded-3xl border border-lime/40 bg-[#FAF7F2] dark:bg-[#111318] p-4 sm:p-8 text-[#111E25] dark:text-[#F3F4F6] shadow-glass overflow-hidden">
      {/* Top Banner Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-4">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-lime flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Live Interactive Application Prototype
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold mt-1">
            Ungdomskort Redesigned Web Portal
          </h2>
          <p className="text-xs text-muted-fg">
            Explore the live, working student transport dashboard, calendar, message center, and student profile below.
          </p>
        </div>
      </div>

      {/* App Shell */}
      <div className="rounded-2xl border border-border bg-white dark:bg-[#090A0C] shadow-lg overflow-hidden font-sans">
        {/* Header Nav */}
        <header className="sticky top-0 z-20 border-b border-border/70 bg-white/90 dark:bg-[#111318]/90 backdrop-blur-md px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          {/* Logo directly using ung-logodisplay.svg */}
          <button
            onClick={() => setActiveTab("dashboard")}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Ungdomskort Dashboard"
          >
            <Image
              src="/assets/ung-logodisplay.svg"
              alt="Ungdomskort Logo"
              width={140}
              height={36}
              className="h-8 w-auto object-contain"
              priority
            />
          </button>

          {/* Navigation Pills */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "dashboard"
                  ? "bg-[#1B6FC8] text-white shadow-sm"
                  : "text-muted-fg hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              Your Youth Card
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === "messages"
                  ? "bg-[#1B6FC8] text-white shadow-sm"
                  : "text-muted-fg hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              <span>Messages</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                3
              </span>
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`hidden sm:inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeTab === "profile"
                  ? "bg-[#1B6FC8] text-white shadow-sm"
                  : "text-muted-fg hover:bg-surface-hover hover:text-foreground"
              }`}
            >
              Personal Profile
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => triggerToast("You have 1 new pass alert.")}
              className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-fg hover:bg-surface-hover hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <button
              onClick={() => triggerToast("Language toggled: Danish / English.")}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-fg hover:bg-surface-hover hover:text-foreground"
              aria-label="Language settings"
            >
              <Globe className="h-4 w-4" />
            </button>
            <button
              onClick={() => triggerToast("Log out simulator action.")}
              className="hidden sm:inline-flex rounded-full border border-border px-3.5 py-1 text-xs font-semibold text-foreground hover:bg-surface-hover"
            >
              Log out
            </button>
          </div>
        </header>

        {/* Tab 1: Dashboard */}
        {activeTab === "dashboard" && (
          <div className="p-4 sm:p-8 space-y-8 animate-fadeIn">
            {/* Hero Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/30 px-3 py-1 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Active Membership
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                  Welcome to your <br />
                  <span className="text-[#1B6FC8] italic">Youth Card</span> portal
                </h3>
                <p className="text-xs sm:text-sm text-muted-fg leading-relaxed">
                  Commuting, just made simple. Manage your subscriptions, track your active periods, and explore new benefits.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setActiveTab("calendar")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1B6FC8] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[#145ba3] transition-all"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add New Period</span>
                  </button>
                  <button
                    onClick={() => triggerToast("Downloading PDF invoice...")}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface-hover transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Invoice</span>
                  </button>
                </div>
              </div>

              {/* KPI Stat Cards */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-surface p-4 space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-muted-fg">Total Spent</span>
                    <CreditCard className="h-4 w-4 text-[#1B6FC8]" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">DKK 4,043</p>
                  <span className="text-[10px] font-mono font-bold text-green-600 dark:text-green-400">-12% savings</span>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4 space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-muted-fg">Active Periods</span>
                    <CalendarIcon className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">6</p>
                  <span className="text-[10px] font-mono font-bold text-green-600 dark:text-green-400">Current</span>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4 space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-muted-fg">Dispatched</span>
                    <PhoneCall className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">1</p>
                  <span className="text-[10px] font-mono font-bold text-green-600 dark:text-green-400">Ready</span>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4 space-y-1 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase font-bold text-muted-fg">Pending</span>
                    <Clock className="h-4 w-4 text-amber-500" />
                  </div>
                  <p className="font-display text-xl font-bold text-foreground">5</p>
                  <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">Processing</span>
                </div>
              </div>
            </div>

            {/* Active Subscription Periods Cards */}
            <div className="space-y-4 pt-4 border-t border-border/70">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display text-base font-bold text-foreground">Your Active Subscription Periods</h4>
                  <p className="text-xs text-muted-fg">Each card below represents a subscription period with key validity dates.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Period #6 */}
                <div className="rounded-xl border border-green-500/40 bg-surface overflow-hidden shadow-sm">
                  <div className="bg-green-600 px-4 py-2 flex items-center justify-between text-white font-mono text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5" /> Dispatched
                    </span>
                    <span>Period #6</span>
                  </div>
                  <div className="p-4 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-bold text-foreground">01-04-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-bold text-red-500">20-04-2024</span>
                    </div>
                  </div>
                </div>

                {/* Period #5 */}
                <div className="rounded-xl border border-blue-500/40 bg-surface overflow-hidden shadow-sm">
                  <div className="bg-[#1B6FC8] px-4 py-2 flex items-center justify-between text-white font-mono text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Ordered
                    </span>
                    <span>Period #5</span>
                  </div>
                  <div className="p-4 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-bold text-foreground">03-04-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-bold text-red-500">14-10-2024</span>
                    </div>
                  </div>
                </div>

                {/* Period #4 */}
                <div className="rounded-xl border border-blue-500/40 bg-surface overflow-hidden shadow-sm">
                  <div className="bg-[#1B6FC8] px-4 py-2 flex items-center justify-between text-white font-mono text-xs font-bold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Ordered
                    </span>
                    <span>Period #4</span>
                  </div>
                  <div className="p-4 font-mono text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-fg">Start Date</span>
                      <span className="font-bold text-foreground">10-10-2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-fg">End Date</span>
                      <span className="font-bold text-red-500">15-11-2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Calendar */}
        {activeTab === "calendar" && (
          <div className="p-4 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Your Subscription Calendar</h3>
                <p className="text-xs text-muted-fg">Interactive overview of active, ordered, and pending pass coverage dates.</p>
              </div>
              <button
                onClick={() => triggerToast("New period creation flow opened.")}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#1B6FC8] px-4 py-2 text-xs font-semibold text-white shadow-sm"
              >
                <Plus className="h-3.5 w-3.5" /> Add New Period
              </button>
            </div>

            {/* Calendar Controls */}
            <div className="rounded-xl border border-border bg-surface p-4 space-y-4 shadow-sm">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handlePrevMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-hover"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="font-display text-base font-bold text-foreground">
                  {months[calMonth]} {calYear}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:bg-surface-hover"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center font-mono text-[10px] uppercase font-bold text-muted-fg border-b border-border/60 pb-2">
                <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>

              {/* Calendar Grid Demo */}
              <div className="grid grid-cols-7 gap-1 font-mono text-xs text-center">
                {Array.from({ length: 31 }).map((_, idx) => {
                  const dayNum = idx + 1;
                  const isActivePeriod = dayNum >= 1 && dayNum <= 10;
                  const isOrderedPeriod = dayNum >= 14 && dayNum <= 22;
                  const isPendingPeriod = dayNum >= 25 && dayNum <= 28;

                  return (
                    <div
                      key={dayNum}
                      className={`min-h-[50px] p-1.5 rounded-lg border flex flex-col justify-between items-center text-[11px] ${
                        isActivePeriod
                          ? "bg-green-500/10 border-green-500/40 text-green-700 dark:text-green-300 font-bold"
                          : isOrderedPeriod
                          ? "bg-blue-500/10 border-blue-500/40 text-blue-700 dark:text-blue-300 font-bold"
                          : isPendingPeriod
                          ? "bg-amber-500/10 border-amber-500/40 text-amber-700 dark:text-amber-300 font-bold"
                          : "border-border/50 text-foreground"
                      }`}
                    >
                      <span className="self-start">{dayNum}</span>
                      {isActivePeriod && <span className="text-[9px] uppercase tracking-wider text-green-600">Active</span>}
                      {isOrderedPeriod && <span className="text-[9px] uppercase tracking-wider text-blue-600">Ordered</span>}
                      {isPendingPeriod && <span className="text-[9px] uppercase tracking-wider text-amber-600">Pending</span>}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 font-mono text-xs pt-2 border-t border-border/60">
                <span className="flex items-center gap-1.5 text-green-600 font-bold">
                  <span className="h-2.5 w-2.5 rounded-sm bg-green-500" /> Active
                </span>
                <span className="flex items-center gap-1.5 text-blue-600 font-bold">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#1B6FC8]" /> Ordered
                </span>
                <span className="flex items-center gap-1.5 text-amber-600 font-bold">
                  <span className="h-2.5 w-2.5 rounded-sm bg-amber-500" /> Pending
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Messages */}
        {activeTab === "messages" && (
          <div className="p-4 sm:p-8 space-y-4 animate-fadeIn">
            <h3 className="font-display text-xl font-bold text-foreground">Messages &amp; Notifications</h3>

            <div className="space-y-3">
              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3 shadow-sm hover:border-[#1B6FC8] transition-all">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-[#1B6FC8]">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 font-mono text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-bold">Ungdomskort Transport Authority</strong>
                    <span className="text-muted-fg text-[10px]">2 days ago</span>
                  </div>
                  <p className="font-bold text-foreground text-sm">Your period #8 has been dispatched and is ready to use</p>
                  <p className="text-muted-fg text-xs">Your active subscription period from 01-04-2024 to 10-04-2024 is now active on your physical &amp; digital card.</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3 shadow-sm hover:border-[#1B6FC8] transition-all">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 font-mono text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-bold">Payment Confirmed</strong>
                    <span className="text-muted-fg text-[10px]">5 days ago</span>
                  </div>
                  <p className="font-bold text-foreground text-sm">DKK 384,00 payment for period #7 confirmed</p>
                  <p className="text-muted-fg text-xs">Your Danish MobilePay transaction was processed successfully.</p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 flex items-start gap-3 shadow-sm hover:border-[#1B6FC8] transition-all">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div className="space-y-0.5 font-mono text-xs flex-1">
                  <div className="flex justify-between items-center">
                    <strong className="text-foreground text-xs font-bold">Renewal Reminder</strong>
                    <span className="text-muted-fg text-[10px]">1 week ago</span>
                  </div>
                  <p className="font-bold text-foreground text-sm">Period #5 expires in 14 days — renew now</p>
                  <p className="text-muted-fg text-xs">Your current period ends 13-11-2024. Add a new period to avoid any gap in travel coverage.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Profile */}
        {activeTab === "profile" && (
          <div className="p-4 sm:p-8 space-y-6 animate-fadeIn">
            <h3 className="font-display text-xl font-bold text-foreground">Personal Profile</h3>

            <div className="rounded-xl border border-border bg-surface p-5 flex items-center gap-4 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1B6FC8]/10 text-[#1B6FC8]">
                <User className="h-7 w-7" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-foreground">Fernando Alonso</h4>
                <p className="font-mono text-xs text-muted-fg">SDU Student · Odense, Denmark</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">CPR Number</span>
                <p className="font-bold text-foreground text-sm">••••••-••••</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">Email</span>
                <p className="font-bold text-foreground text-sm">f.alonso@student.sdu.dk</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">Address</span>
                <p className="font-bold text-foreground text-sm">Campusvej 55, 5230 Odense M</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">Institution</span>
                <p className="font-bold text-foreground text-sm">Syddansk Universitet (SDU)</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">Card Number</span>
                <p className="font-bold text-foreground text-sm">XXXX — XXXX — 0981</p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 space-y-1">
                <span className="text-[10px] text-muted-fg uppercase font-bold">Commute Route</span>
                <p className="font-bold text-foreground text-sm">Odense → Kolding (Zones 40–70)</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl border border-[#1B6FC8]/40 bg-[#EBF3FC] dark:bg-[#111318] px-4 py-3 text-xs font-mono font-bold text-[#1B6FC8] shadow-lg animate-bounce">
          {toastMessage}
        </div>
      )}
    </section>
  );
}
