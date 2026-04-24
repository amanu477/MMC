import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DOCTORS } from "@/data/doctors";
import { DEPARTMENTS } from "@/data/departments";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useMemo } from "react";
import { Link, useSearch } from "wouter";
import { Search, MapPin } from "lucide-react";

export default function Doctors() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialDept = searchParams.get("department") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doc) => {
      const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === "all" || doc.departmentId === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [searchQuery, selectedDept]);

  return (
    <PageTransition>
      <SEO title="Find a Doctor | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-primary pt-20 pb-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Specialists</h1>
          <p className="text-lg text-white/80">
            Meet our dedicated team of renowned physicians, surgeons, and specialists committed to delivering exceptional healthcare.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-border/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Search by Name</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  placeholder="e.g. Dr. Milkiyas..." 
                  className="pl-10 h-12 bg-muted/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Filter by Department</label>
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="h-12 bg-muted/20">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {DEPARTMENTS.map((dept) => (
                    <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 rounded-2xl">
            <h3 className="text-xl font-bold text-primary mb-2">No doctors found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doc) => {
              const deptName = DEPARTMENTS.find(d => d.id === doc.departmentId)?.name || "Department";
              return (
                <Link key={doc.id} href={`/doctors/${doc.id}`} className="group block">
                  <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                      <img 
                        src={doc.photoUrl} 
                        alt={doc.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Doctor";
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-lg text-primary mb-1">{doc.name}</h3>
                      <p className="text-sm text-secondary-foreground font-medium mb-4 line-clamp-2">{doc.specialty}</p>
                      <div className="mt-auto flex items-center text-xs text-muted-foreground font-medium">
                        <MapPin size={14} className="mr-1" />
                        {deptName}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>

    </PageTransition>
  );
}
