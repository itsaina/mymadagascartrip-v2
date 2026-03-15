import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My Madagascar Trip
        </h1>
        
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Découvrez Madagascar avec nos circuits sur mesure
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Circuits 4x4</CardTitle>
              <CardDescription>
                Explorez Madagascar en tout-terrain
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Découvrir</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Séjours balnéaires</CardTitle>
              <CardDescription>
                Détendez-vous sur nos plages paradisiaques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Découvrir</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tourisme durable</CardTitle>
              <CardDescription>
                Voyagez responsable avec nous
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button>Découvrir</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
