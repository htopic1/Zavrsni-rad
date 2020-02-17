var prviAngular=angular
                .module('modul',[])

                .controller('meni',function($scope)
                {
                    $scope.padajEvropa=function()
                    {
                        $scope.styleEvropa=
                        {
                            "display":"block"
                        }
                    }

                    $scope.sakrijEvropa=function()
                    {
                        $scope.styleEvropa=
                        {
                            "display":"none"
                        }
                    }

                    $scope.padajAfrika=function()
                    {
                        $scope.styleAfrika=
                        {
                            "display":"block"
                        }
                    }

                    $scope.sakrijAfrika=function()
                    {
                        $scope.styleAfrika=
                        {
                            "display":"none"
                        }
                    }

                    $scope.padajAzija=function()
                    {
                        $scope.styleAzija=
                        {
                            "display":"block"
                        }
                    }

                    $scope.sakrijAzija=function()
                    {
                        $scope.styleAzija=
                        {
                            "display":"none"
                        }
                    }

                    $scope.padajAmerika=function()
                    {
                        $scope.styleAmerika=
                        {
                            "display":"block"
                        }
                    }

                    $scope.sakrijAmerika=function()
                    {
                        $scope.styleAmerika=
                        {
                            "display":"none"
                        }
                    }
                })

                .controller('kontinenti',function($scope)
                {
                    $scope.evropa=function()
                    {
                        $scope.myStyleEvropa=
                        {
                            "border-top":"250px solid purple",
                            "transform":"rotate(90deg)",
                            "filter":"opacity(1)",
                            "left":"-45%",
                            "transition":"1s"
                        }

                        $scope.myStyleEvropaIme=
                        {
                            "transform":"rotate(-90deg)",
                            "transition":"1s"
                        }

                        $scope.prekoEvropeAzija=
                        {
                            "display":"none"
                        }

                        $scope.prekoEvropeAfrika=
                        {
                            "display":"none"
                        }

                        $scope.prekoEvropeAmerika=
                        {
                            "display":"none"
                        }
                    }
                })